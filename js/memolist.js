$(function(){
    if(window.location.href == "https://moocs.iniad.org/courses?memolists"){
        $(".content-wrapper").empty();
        const addhtml = '<section class="content-header">    <h1>保存したメモ一覧</h1></section><section class="content container-fluid">    <ul class="mymemolist list-group list-group-flush">    </ul></section>';
        $(".content-wrapper").append(addhtml);

        for(let stgkey in localStorage){
            let decodedstgkey = decodeURIComponent(stgkey);
            if(decodedstgkey.indexOf("https://moocs.iniad.org") != -1){
                let nullcheck = false;
                for(let content of JSON.parse(decodeURIComponent(localStorage[stgkey]))){
                    if(content != null){
                        nullcheck = true;
                        break;
                    }
                }

                if(nullcheck){
                    const li = '<li class="list-group-item">' + '<a href="' + decodedstgkey + '">' + decodedstgkey + '</a>' + '</li>';
                    $(".mymemolist").append(li);
                }
            }
        }
    }
});