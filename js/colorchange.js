$(document).on("click", "#bgc_change",function(){
    let result = $("#bgc_input").val();
    document.cookie = "bgcolor=" + result + ";max-age=31536000";
    

    if($("#header-form").is(':checked')){
        localStorage["header"] = true;
    }
    else{
        localStorage["header"] = false;
    }

    window.location="https://moocs.iniad.org/account";
});

$(document).on("click", "#bgc_delete", function(){
    let deleteConfirm = confirm("設定を削除しますか？");
    if(deleteConfirm){
        delete localStorage["header"];
        document.cookie = "bgcolor=; max-age=0";
        location.reload();
    }
    
});