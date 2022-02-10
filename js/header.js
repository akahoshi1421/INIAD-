$(function(){
    if(localStorage["header"]){//そもそもあるかどうか
        if(localStorage["header"] == "true"){//こっちは中身(混同しないように)
            $(".main-header").css({
                "position": "fixed",
                "width": "100%"
            });
            $(".main-sidebar").css({
                "position": "fixed"
            });

            $(".content-wrapper").css({"padding-top": "50px"});
        }
    }
});