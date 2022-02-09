$(function(){
    if(window.location.pathname == "/ct/home"){
        let dl_button = '<button id="ace_dl_button">時間割をjson化</button>';
        $(".mycourses-body").prepend(dl_button);
    }
});