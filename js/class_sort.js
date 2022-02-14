var classes_default = "";//デフォルトのhtmlを保持しておくためのもの
var classes_mysorted = "";

$(function(){
    if(window.location.pathname == "/courses"){
        let classes = $(".container-fluid");
        classes_default = $(classes).html();

        let classes_block = $(classes).find(".flex");
        for(let i = 1; i < classes_block.length; i++){
            $(classes_block[0]).append($(classes_block[i]).html());
            $(classes_block[i]).empty();
        }
        let h4s = $("h4");
        $(h4s).each(function(index){
            if($(this).text() == "Other Courses"){
                $(this).empty();
            }
        });

        $(".flex").sortable();
        classes = $(".container-fluid");
        classes_mysorted = $(classes).html();
    }
});