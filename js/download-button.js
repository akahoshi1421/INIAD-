$(function(){
    if($("iframe").length){
        
        let iframe_download = "";
        let iframe_set = $("iframe")
        for(let i = 0; i < iframe_set.length; i++){
            if(iframe_set[i].src.indexOf("docs.google.com") != -1){
                iframe_download = iframe_set[i].src;
                break;
            }
        }
        if(iframe_download != ""){
            let src = iframe_download + "&download=true";
            let tag = "<a href='" + src + "' id='slide_download' target='_blank'><i class='fa fa-download'></i>  <b>スライドをダウンロードする</b></a>"
            $($(".pad-block")[0]).append(tag);
            setTimeout(function(){
                $("#slide_download").addClass("btn btn-success");
            }, 100);

        }
    }
});