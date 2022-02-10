$(function(){
    if(localStorage["header"]){//そもそもあるかどうか
        if(localStorage["header"] == "true"){//こっちは中身(混同しないように)
            $(".main-header").css({
                "position": "fixed",
                "width": "100%"
            });
            $(".content-wrapper").css({"padding-top": "50px"});
        }
    }
});