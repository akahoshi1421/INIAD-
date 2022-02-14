$(function(){
    if(window.location.origin.indexOf("moocs")){
        let bodys = $(".media-body");
        let year = $($(".active")).text();
        year = year.split(" ")[1];//一番手前にスペースがあるっぽいので
        let course_tittle = bodys.find(".media-heading");//コースのタイトル
        let cnt = 0;
        $(course_tittle).each(function(){
            let thistext = $(this).text();
            thistext = thistext.split("＆")[0];
            thistext = thistext.split("&")[0];
            thistext = thistext.split("（")[0];
            thistext = thistext.split("(")[0];
            const opendrive = '<a href="https://drive.google.com/drive/u/0/search?q=type:folder%20' + year + '%20' + thistext + '" class="btn btn-success drive-search" target="_blank"><i class="fab fa-google-drive"></i>ドライブで探す</a>';
            $(bodys[cnt]).append(opendrive);
            cnt++;
        });

    }
});