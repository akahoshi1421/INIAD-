$(function(){
    let textarea_cookie = "";
    let rc = document.cookie.split(";");

    for(let value of rc){
        let content = value.split("=");
        if(decodeURIComponent(content[0]) == window.location.href || decodeURIComponent(content[0]) == " " + window.location.href){
            textarea_cookie = decodeURIComponent(content[1]);
        }
    }
    const moocsmemo = '<div id="mymemo-contents">    <i class="fas fa-times" id="memocross"></i><div id="mymemopd"></div>    <textarea rows="15" id="textarea-mymemo">' + textarea_cookie + '</textarea>    <button class="btn btn-primary btn-sm" id="memobtn">ダウンロード</button></div>';
    $(".content-wrapper").append(moocsmemo);
    $("#mymemo-contents").draggable();
    $("#mymemo-contents").resizable();
});