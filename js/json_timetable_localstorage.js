$(document).on("change", "#uploadjsonfile", function(e){
    let jsonfile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(jsonfile);

    $(reader).on("load", function(){
        localStorage.setItem("timetable", encodeURIComponent(reader.result));
    });
    alert("登録が完了しました");
    window.location = window.location.href;
});