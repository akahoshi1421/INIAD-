$(function(){
    if(window.location.href.indexOf("moocs") != -1){
        let txtareas = $("textarea");
        for(let txtarea of txtareas){
            let txt = $(txtarea).val();

            let txtcnt = txt.length;
            let wordcnt;

            const spaces = txt.match(/\S+/g);
            if(spaces){
                wordcnt = spaces.length;
            }
            else{
                wordcnt = 0;
            }

            const insertcnt = "<p>文字数:" + txtcnt + " 単語数:" + wordcnt + "</p>";
            $(txtarea).after(insertcnt);
        }
    }
});

$(document).on("input", "textarea", function(){
    let thistxt = $(this).val();
    let txtcnt = thistxt.length;
    let wordcnt;

    const spaces = thistxt.match(/\S+/g);
    if(spaces){
        wordcnt = spaces.length;
    }
    else{
        wordcnt = 0;
    }

    const insertcnt = "文字数:" + txtcnt + " 単語数:" + wordcnt;
    $($(this).next()).text(insertcnt);
});