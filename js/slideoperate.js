$(function(){
    if($(".embed-responsive").length != 0){
        const slideoperatebtn = '<div id="slidebutton-div"><i class="fa fa-arrows" id="slidearrow" title="スライドを動かす"></i></div>';
        $("body").append(slideoperatebtn);

        const slidedefaultbtn = '<div class="btn-group"><button class="btn btn-primary" id="slidedefault"><i class="fa fa-file"></i> スライド位置を元に戻す</button><a href="/courses?slideoperate" class="btn btn-success" target="_blank"><i class="fa fa-question-circle"></i>スライド操作の説明</a></div>';
        $($(".pad-block")[0]).prepend(slidedefaultbtn);
    }
});

var slidescale = 1;
var slidex = 0;
var slidey = 1;
var slide_operate_permission = false;//スライド操作の許可

document.onkeydown = event =>{
    if(slide_operate_permission){
        if(event.key == "+"){
            slidescale += 0.1;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
        else if(event.key == "-"){
            slidescale -= 0.1;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
        else if(event.key == "w"){
            slidey -= 10;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
        else if(event.key == "s"){
            slidey += 10;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
        else if(event.key == "a"){
            slidex -= 10;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
        else if(event.key == "d"){
            slidex += 10;
            $(".embed-responsive").css({
                "transform": "scale(" + slidescale + ")" + " translate(" + slidex + "px, " + slidey + "px)"
            });
        }
    }
}

$(document).on("click", "#slidearrow", function(){
    if($(this).attr("title") == "スライドを動かす"){
        $(this).css({
            "color": "#99BDDB"
        });
        $(this).attr("title", "スライド操作をやめる");
        slide_operate_permission = true;
        
    }
    else{
        $(this).css({
            "color": "#337ab7"
        });
        $(this).attr("title", "スライドを動かす");
        slide_operate_permission = false;
    }
});

$(document).on("click", "#slidedefault", function(){
    $(".embed-responsive").css({
        "transform": "scale(1) translate(0px, 0px)"
    });
    slidescale = 1;
    slidex = 0;
    slidey = 1;
});