var memoclicked = false;

function memoui()
{
    $(".mymemo-contents").draggable();
    $(".mymemo-contents").resizable();
    $(".mymemo-contents").css({
        "position": "absolute",
        "z-index": "1"
    });//何故かバグるのでCSSを上書き

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

        if($(txtarea).next().text().indexOf("文字数:") == -1){
            const insertcnt = "<p>文字数:" + txtcnt + " 単語数:" + wordcnt + "</p>";
            $(txtarea).after(insertcnt);
        }
    }
}

$(document).on("click", "#mynote", function(){
    if(!memoclicked){
        memoclicked = true;

        if($(".mymemo-contents").length != 0){
            $(".mymemo-contents").css({
                "display": "block"
            }); 
        }

        else{
            //localstorageからメモデータを抜き出し(配列であることに注意)
            let textarea_localstg_l = localStorage[encodeURIComponent(window.location.origin + window.location.pathname)];

            if(textarea_localstg_l){//なんかデータある場合
                textarea_localstg_l = JSON.parse(textarea_localstg_l);
                let cnt = 0;
                let null_check = false;
                for(let textarea_localstg of textarea_localstg_l){
                    if(textarea_localstg){//nullよけ
                        null_check = true;
                        let rand = Math.random() * 3 + 3;
                        const moocsmemo = '<div class="mymemo-contents" cnt=' + cnt + ' style="right: ' + rand + '%">    <ul class="memoul"><li><i class="fas fa-trash memodelete" title="削除"></i></li><li><i class="fas fa-sticky-note memonew" title="新規"></i></li><li><i class="fas fa-times memocross" title="閉じる"></i></li></ul><div class="mymemopd"></div>    <textarea rows="15" class="textarea-mymemo">' + decodeURIComponent(textarea_localstg) + '</textarea>    <button class="btn btn-primary btn-sm memobtn">ダウンロード</button></div>';
                        $(".content-wrapper").prepend(moocsmemo);
                    }
                    cnt++;

                }
                if(!null_check){//すべて消してしまった場合の処理
                    let rand = Math.random() * 3 + 3;
                    const moocsmemo = '<div class="mymemo-contents" cnt="0" style="right: ' + rand + '%">    <ul class="memoul"><li><i class="fas fa-trash memodelete" title="削除"></i></li><li><i class="fas fa-sticky-note memonew" title="新規"></i></li><li><i class="fas fa-times memocross" title="閉じる"></i></li></ul><div class="mymemopd"></div>    <textarea rows="15" class="textarea-mymemo"></textarea>    <button class="btn btn-primary btn-sm memobtn">ダウンロード</button></div>';
                    $(".content-wrapper").prepend(moocsmemo);
                }
            }

            else{//ない場合
                let rand = Math.random() * 3 + 3;
                const moocsmemo = '<div class="mymemo-contents" cnt="0" style="right: ' + rand + '%">    <ul class="memoul"><li><i class="fas fa-trash memodelete" title="削除"></i></li><li><i class="fas fa-sticky-note memonew" title="新規"></i></li><li><i class="fas fa-times memocross" title="閉じる"></i></li></ul><div class="mymemopd"></div>    <textarea rows="15" class="textarea-mymemo"></textarea>    <button class="btn btn-primary btn-sm memobtn">ダウンロード</button></div>';
                $(".content-wrapper").prepend(moocsmemo);
            }

            memoui();
        }
    }
    else{
        memoclicked = false;
        $(".mymemo-contents").css({
            "display": "none"
        });   
    }
});

$(document).on("click", ".memocross", function(){
    memoclicked = false;
    $($(this).parent().parent().parent()).css({
        "display": "none"
    }); 
});

$(document).on("click", ".memonew", function(){
    let contents = $(".mymemo-contents");
    let default_cnt = 0;
    contents.each(function(index){
        if(Number($(this).attr("cnt")) > default_cnt){
            default_cnt = Number($(this).attr("cnt"));
        }//最大値の取得
    });

    default_cnt++;

    let rand = Math.random() * 6 + 3;
    const moocsmemo = '<div class="mymemo-contents" cnt=' + default_cnt + ' style="right: ' + rand + '%">    <ul class="memoul"><li><i class="fas fa-trash memodelete" title="削除"></i></li><li><i class="fas fa-sticky-note memonew" title="新規"></i></li><li><i class="fas fa-times memocross" title="閉じる"></i></li></ul><div class="mymemopd"></div>    <textarea rows="15" class="textarea-mymemo"></textarea>    <button class="btn btn-primary btn-sm memobtn">ダウンロード</button></div>';
    $(".content-wrapper").prepend(moocsmemo);
    memoui();
});

$(document).on("click", ".memodelete", function(){
    let cnt = Number($($(this).parent().parent().parent()).attr("cnt"));
    let textarea_localstg_l = localStorage[encodeURIComponent(window.location.origin + window.location.pathname)];
    if(textarea_localstg_l){
       let textarea_localstg_l_parsed = JSON.parse(textarea_localstg_l);
       textarea_localstg_l_parsed[cnt] = null;//データをなかったことにする(実際はnullがあるので注意)
       localStorage[encodeURIComponent(window.location.origin + window.location.pathname)] = JSON.stringify(textarea_localstg_l_parsed);
        $($(this).parent().parent().parent()).remove();
    }
    else{
        alert("何も保存されていない場合は削除できません");
    }

});

$(document).on("click", ".memobtn", function(){
    let textdl = $($($(this).parent()).find("textarea")).val();
    let link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([textdl],{
        type: "text/plain"
    }));
    link.download = $("title").text() + ".txt";
    link.click();
});

$(document).on("input", ".textarea-mymemo", function(){
    let text_localstg = $(this).val();
    let textarea_cnt = Number($($(this).parent()).attr("cnt"));
    let textarea_localstg_l = localStorage[encodeURIComponent(window.location.origin + window.location.pathname)];
    if(!textarea_localstg_l) textarea_localstg_l = [];
    else textarea_localstg_l = JSON.parse(textarea_localstg_l);

    textarea_localstg_l[textarea_cnt] = encodeURIComponent(text_localstg);//既存の書き換えの場合

    localStorage[encodeURIComponent(window.location.origin + window.location.pathname)] = JSON.stringify(textarea_localstg_l);
});

//クリックした時その要素が一番前に出るように
$(document).on("mousedown", ".mymemo-contents", function(){
    $(".mymemo-contents").css({
        "z-index": "1"
    });

    $(this).css({
        "z-index": "2"
    });
});

