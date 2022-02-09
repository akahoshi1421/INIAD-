$(function(){
    if(window.location.origin + window.location.pathname == "https://moocs.iniad.org/courses"){
        const uploadbutton = '<div>時間割を登録<b>(aceからjsonデータをダウンロードしてください)</b><input type="file" id="uploadjsonfile" accept=".json"></div>'
        $(".container-fluid").prepend(uploadbutton);

    }
});