$(function(){
    if(window.location.pathname == "/courses"){
        if(localStorage.getItem("registedclass") != null){
            let classes_data = localStorage.getItem("registedclass");
            let classes_parsed = JSON.parse(classes_data);

            let classes = $(".flex").children();

            let registclasses2 = $(".well");
            let textsh4_2 = $(registclasses2).find(".media-heading");
            let l_txt_2 = [];
            $(textsh4_2).each(function(index){
                l_txt_2.push($(this).text());
            });
            
            let l_txt_2_copy = Array.from(l_txt_2);

            $(".flex").empty();
            let cnt = 0;
            for(let oneclass of classes_parsed){
                cnt = 0;
                for(let onetxt of l_txt_2){
                    if(oneclass == onetxt){
                        $($(".flex")[0]).append(classes[cnt]);
                        l_txt_2_copy[cnt] = "";
                    }
                    cnt++;
                }
            }

            cnt = 0;
            for(let check of l_txt_2_copy){//新着のコースが来た場合にちゃんと反映されるようにするための処理
                if(check != ""){
                    $($(".flex")[0]).append(classes[cnt]);
                }
                cnt++;
            }

            classes = $(".container-fluid");
            classes_mysorted = $(classes).html();//元に戻すボタン対応のやつ
        }
    }
});