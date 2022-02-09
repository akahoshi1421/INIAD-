$(function(){
    const btn_default = '<button class="btn btn-primary" id="showdefault">元の並び順を表示</button>';
    $($(".flex")[0]).before(btn_default);
});

$(document).on("click", "#showdefault", function(){
    if($("#showdefault").text() == "元の並び順を表示"){
        $(".container-fluid").empty();
        $(".container-fluid").append(classes_default);
        $("#showdefault").text("設定した並び順を表示");
        $("#showdefault").removeClass("btn-primary");
        $("#showdefault").addClass("btn-warning");
        $("#class-sort-regist").prop("disabled", true);
    }
    else{
        $("#showdefault").text("元の並び順を表示");
        $("#showdefault").removeClass("btn-warning");
        $("#showdefault").addClass("btn-primary");
        $("#class-sort-regist").prop("disabled", false);
        $(".container-fluid").empty();
        $(".container-fluid").append(classes_mysorted);
        $(".flex").sortable();
    }

});