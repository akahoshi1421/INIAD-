$(function(){
    if(window.location.origin + window.location.pathname == "https://moocs.iniad.org/account"){

        /*let script = '<script>function colorchange(){let result = $("#bgc_input").val();document.cookie = "bgcolor=" + result + ";max-age=31536000";window.location="https://moocs.iniad.org/account"}</script>';

        $("body").append(script);*/

        let bgc = '<section id="myadd"></section>';
        $(".content-wrapper").append(bgc);
        $("#myadd").addClass("content container-fluid");
        let bgc_form = '<div id="myadd_form"></div>';
        $("#myadd").append(bgc_form);

        $("#myadd_form").addClass("panel pad-form");

        let my_form_content = '<div id="myadd_form_content"></div>';
        $("#myadd_form").append(my_form_content);

        $("#myadd_form_content").addClass("form-group row");

        let a = '<label id="bgc_label">背景色</label>';
        let b = '<div id="bgc_label_button"></div>';

        $("#myadd_form_content").append(a);
        $("#myadd_form_content").append(b);

        $("#bgc_label").addClass("col-sm-3 col-form-label");
        $("#bgc_label_button").addClass("col-sm-9")

        let bgc_now = $(".content-wrapper").css("background-color");
        let bgc_now16 = new RGBColor(bgc_now);

        let input_color = '<input type="color" id="bgc_input" value="' + bgc_now16.toHex() +'">'
        $("#bgc_label_button").append(input_color);
        $("#bgc_input").addClass("form-control");


        let my_button_div = '<div id="my_text_left">';//反映ボタンの追加
        $("#myadd_form").append(my_button_div);

        $("#my_text_left").addClass("text-left");

        let my_button = '<button id="bgc_change">反映</button>';
        $("#my_text_left").append(my_button);

        $("#bgc_change").addClass("btn btn-primary");
        //↑manifestversionが2だとこんな感じの書き方じゃないとcssが反映されなかったので


        const header = '<div class="form-group row">    <label class="col-sm-3 col-form-label">ヘッダを固定</label>    <div class="col-sm-9">        <input type="checkbox" id="header-form" size="50">    </div></div>';

        $("#myadd_form_content").after(header);

        if(localStorage["header"]){
            if(localStorage["header"] == "true"){
                $("#header-form").prop("checked", true);
            }
        }
        
    }
});