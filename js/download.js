$(function(){
    if(window.location.href.indexOf("docs.google.com/presentation/d/e") != -1){
        let check = confirm("ダウンロードしますか？");
        if(check){
            const name_html = $("title").text();
            const default_html_front = "<div class='row'><div class='col-4'><div class='fix'><h2>目次</h2><hr><ul>";//バーに繋げる
            const default_html_mid = "</ul></div></div><div class='col-8'>"//本体に繋げる
            const default_html_back = "</div>"//最後に繋げる
            let page_result = "";
            let page_bar = "";
            let cnt = 1;
            for(;;){
                let title = $(".punch-viewer-svgpage-a11yelement").attr('aria-label');
                let slide = $('.punch-viewer-svgpage-svgcontainer:last>svg').get(0);
                let text = ""

                $(slide).find("g").each(function (){
                    if($(this).attr('aria-label')){
                        text += ($(this).attr('aria-label') + "<br>")
                    }
                });
                
                page_result += "<div class='blank'></div>";
                page_result += "<div class='row shadow'>";
                page_result += "<h3 id='" + cnt + "'>" + title + "</h3>";
                page_result += "<b>" + cnt + "ページ目</b>";
                page_result += "<div class='col-8'>";
                page_result += new XMLSerializer().serializeToString(slide);
                page_result += "</div>";
                page_result += "<div class='col-4'>";
                
                page_result += text;
                
                page_result += "</div>";
                page_result += "</div>";
                page_result += "<div class='blank'></div>";
                
                page_bar += ("<li>" + "<a href='#" + cnt + "'>" + title + "</a></li><div class='blank2'></div>");

                if($(".docs-material-menu-button-flat-default-caption").attr("aria-setsize") == $(".docs-material-menu-button-flat-default-caption").text()){
                
                    break;
                }
                document.dispatchEvent(new KeyboardEvent("keydown",{
                    keyCode: 39
                }));
                cnt++;
            }
            
            const style = "<style>.blank{height: 15px;}.blank2{height: 10px;}ul{height: 700px; width:60%; overflow: auto; overflow-x: auto; list-style: none;}h2{padding-left: 25%;}.fix{position: fixed; width: 50%;}hr{width: 60%;}</style>";

            const bootstrap = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">';

            let result = "<!DOCTYPE html><html><head><title>" + name_html + "</title>" + bootstrap + style + "</head>" +
            "<body>" + default_html_front + page_bar + default_html_mid + page_result + default_html_back + "</body></html>";

            let link = document.createElement("a");
            link.href = URL.createObjectURL(new Blob([result],{
                type: "text/html"
            }));
            link.download = (name_html + ".html");
            link.click();
        }
    }
});