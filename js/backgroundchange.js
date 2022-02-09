
$(function(){
    let r = document.cookie.split(";");

    let result = "";
    for(let value of r){
        let content = value.split("=");
        if(content[0].indexOf("bgcolor") != -1){
            result = content[1];
            break;
        }
    }
    if(result != ""){
        $(".content-wrapper").css({
            "background-color": result
        });
    }
});