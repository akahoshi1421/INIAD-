$(function(){
    let textarea_localstg = localStorage[encodeURIComponent(window.location.origin + window.location.pathname)];
    let text_localstg_insert = "";
    if(textarea_localstg){
        text_localstg_insert = textarea_localstg;
    }
    const moocsmemo = '<div class="mymemo-contents">    <i class="fas fa-times" class="memocross"></i><div class="mymemopd"></div>    <textarea rows="15" class="textarea-mymemo">' + decodeURIComponent(text_localstg_insert) + '</textarea>    <button class="btn btn-primary btn-sm" class="memobtn">ダウンロード</button></div>';
    $(".content-wrapper").append(moocsmemo);
    $("#mymemo-contents").draggable();
    $("#mymemo-contents").resizable();
});