$(function(){
    if(window.location.href == "https://moocs.iniad.org/courses?slideoperate"){
        $(".content-wrapper").empty();
        const kouji = '<section class="content-header">    <h1>スライド操作説明</h1></section><section class="content container-fluid" id="slideiframediv"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLTyCKAPjmCClgz425A0X_15ms0mkgH1jqWFbhwfp9qIwKmLrlWvTe-Df2n__OZ2qtfo5WTOhk_erN/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></section>';
        $(".content-wrapper").append(kouji);
    }
});