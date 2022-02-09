$(document).on("click", "#bgc_change",function(){
    let result = $("#bgc_input").val();
    document.cookie = "bgcolor=" + result + ";max-age=31536000";
    window.location="https://moocs.iniad.org/account";
})