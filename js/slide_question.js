$(function(){
    if(window.location.href == "https://moocs.iniad.org/courses?slideoperate"){
        $(".content-wrapper").empty();
        const kouji = '<section class="content-header">    <h1>工事中...</h1></section>';
        $(".content-wrapper").append(kouji);
    }
});