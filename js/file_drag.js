$(function(){
    if(window.location.host == "moocs.iniad.org"){
        $(".file-container .file-trigger-btn").text("クリックかここにドロップしてアップロード");
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
    e2 = e.originalEvent;//jQueryがdataTransfer.filesを対応していないため
    $(".file-container .form-control-file")[0].files = e2.dataTransfer.files;
});