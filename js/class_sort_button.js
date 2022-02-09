$(function(){
    if(window.location.pathname == "/courses"){
        const clsbtn = '<button id="class-sort-regist" class="btn btn-success">並び替えたコースを登録</button>'
        $($(".flex")[0]).before(clsbtn);
    }
});

$(document).on("click", "#class-sort-regist", function(){
    let confirm_regist = confirm("この並び順でコースを登録しますか？");
    if(confirm_regist){
        let registclasses = $(".well");
        let textsh4 = $(registclasses).find(".media-heading");
        let l_txt = [];
        $(textsh4).each(function(index){
            l_txt.push($(this).text());
        });

        let registclass_local = JSON.stringify(l_txt, null, "");
        localStorage.setItem("registedclass", registclass_local);
    }
});