$(function(){
    if(window.location.href.indexOf("moocs") != -1){
        const scdiv = '<div id="sctop"><a href="#"><span id="scicon"><i class="fas fa-angle-double-up"></i></span></a></div>';
        $(".content-wrapper").append(scdiv);
    }
});

$(function(){
    let sc = $("#sctop");
    sc.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            sc.fadeIn();
        }
        else{
            sc.fadeOut();
        }
    });

    sc.click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 200);
        return false;
    })
});