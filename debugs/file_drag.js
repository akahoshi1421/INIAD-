$(function(){
    if(window.location.host == "moocs.iniad.org"){
        setTimeout(function(){
            $(".file-container .file-trigger-btn").text("クリックかここにドロップしてアップロード");
        }, 200);
    }
})

$(document).on("dragover", ".file-container .file-trigger-btn:enabled", function(e){
    e.preventDefault();
    $(this).addClass("dragover");
});

$(document).on("dragleave", ".file-container .file-trigger-btn:enabled", function(e){
    e.preventDefault();
    $(this).removeClass("dragover");
});

$(document).on("drop", ".file-container .file-trigger-btn:enabled", function(e){
    e.preventDefault();
    $(this).removeClass("dragover");
    e2 = e.originalEvent;//jQueryがdataTransfer.filesを対応していないため
    $(".file-container .form-control-file")[0].files = e2.dataTransfer.files;
    $($(".file-container .form-control-file")[0]).change();//プログラムから無理やり値を変えた際、changeイベントが発火しないので強引に発火
});

/*
$(document).on("change", ".problem-contents [name][type=file]", function(e){
    let fd = new FormData();
    fd.append("file", e.target.files[0]);
    $.ajax({
        url: $(".problem-container").data("urlprefix") + "/file/" + $(this).attr("name"),
        type: "POST",
        processData: false,
        contentType: false,
        dataType: "json",
        data: fd,
        context: this,
        timeout: 30000,
    }).done(function(data){
        $(this).val("");
        console.log("aaaaaaaaaa");
    })
});
*/
