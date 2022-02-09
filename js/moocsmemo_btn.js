$(document).on("click", "#mynote", function(){
    if($("#mymemo-contents").css("display") == "none"){
        $("#mymemo-contents").css({
            "display": "block"
        });
    }
    else{
        $("#mymemo-contents").css({
            "display": "none"
        });    
    }
});

$(document).on("click", "#memocross", function(){
    $("#mymemo-contents").css({
        "display": "none"
    }); 
});

$(document).on("click", "#memobtn", function(){
    let textdl = $("#textarea-mymemo").val();
    let link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([textdl],{
        type: "text/plain"
    }));
    link.download = $("title").text() + ".txt";
    link.click();
});

$(document).on("input", "#textarea-mymemo", function(){
    let text_localstg = $("#textarea-mymemo").val();

    localStorage[encodeURIComponent(window.location.origin + window.location.pathname)] = encodeURIComponent(text_localstg);
});

