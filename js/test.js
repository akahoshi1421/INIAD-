let timetable_json = {"1":["","","ユーザ・エクスペリエンス・デザインII","","",""],"2":["","エネルギーと環境インフラ","","デザイン理論II","",""],"3":["異文化交渉論/コミュニケーションの哲学日本語","コンピュータ・ネットワークI1","","オペレーティング・システム1","アルゴリズムとデータ構造I1",""],"4":["","情報連携エンジニアリング演習IIB1","","情報連携エンジニアリング演習IB1","",""],"5":["情報連携デザイン演習IIB","","","","情報連携実習IIBエンジニアリング3",""],"6":["","","","","",""],"7":["","","","","",""],"8":["","","","","",""]}

/*let result = {}

for(let i = 0; i < a[i + 1].length; i++){
    let l = [];
    for(let i2 = 1; i2 < 9; i2++){
        l.push(a[i2][i]);
    }
    result[i] = l;
}

console.log(result);*/
let now = new Date();
let now_day = now.getDay() - 1;
let now_hour = now.getHours();
let now_minute = now.getMinutes();
//1限9:00 2限10:40 3限13:00 4限14:45 5限16:00 6限18:15 7限19:55
//0900 1040 1300 1445 1600 1815 1955

let timetable_json_day = {};//曜日準拠にする
for(let i = 0; i < timetable_json[i + 1].length; i++){
    let l = [];
    for(let i2 = 1; i2 < 9; i2++){
        l.push(timetable_json[i2][i]);
    }
    timetable_json_day[i] = l;
}

let now_hour2 = ("0" + now_hour).slice(-2);
let now_minute2 = ("0" + now_minute).slice(-2);

let time_str =  String(now_day) + now_hour2 + now_minute2;

if(now_day == -1 || time_str > 51955) time_str = 0;

const timelist = [
    [900, 1040, 1300, 1445, 1600, 1815, 1955],
    [10900, 11040, 11300, 11445, 11600, 11815, 11955],
    [20900, 21040, 21300, 21445, 21600, 21815, 21955],
    [30900, 31040, 31300, 31445, 31600, 31815, 31955],
    [40900, 41040, 41300, 41445, 41600, 41815, 41955],
    [50900, 51040, 51300, 51445, 51600, 51815, 51955],
]

let timepointer = [];
let timepointer2 = [];//オーバーフロー対策
for(let thistimes of timelist){
    for(let thistime of thistimes){
        if(time_str <= thistime){
            timepointer.push(thistime);
        }
        else{
            timepointer2.push(thistime);
        }
    }
}

let result_l = [];

let cls = "";

let break_ = false;

for(let d of timepointer){
    if(break_) break;

    let cnt = 0;
    for(let thistimes of timelist){
        if(break_) break;

        let cnt2 = 0;
        for(let thistime of thistimes){
            if(d == thistime){
                cls = timetable_json_day[cnt][cnt2];
                if(cls != ""){
                    break_ = true;
                    break;
                }
            }
            
            cnt2++;
        }
        cnt++;
    }
}

console.log(cls);

$(document).on("click", "#mynote", function(){
    $("#mymemo-contents").css({
        "display": "block"
    });
});

function colorchange(){let result = $("#bgc_input").val();document.cookie = "bgcolor=" + result + ";max-age=31536000";window.location="https://moocs.iniad.org/account";}

function dl(){    if(window.location.href.indexOf("https://www.ace.toyo.ac.jp/ct/home") != -1){        let conf = confirm("jsonをダウンロードしますか?");        if(conf){            let table = $(".stdlist")[0];            let tbody = $(table).find("tr");            let result = {};            for(let i = 1; i < 9; i++){                let l = [];                let one_time = $(tbody[i]).find(".course");                for(let i2 = 0; i2 < one_time.length; i2++){                    let course = "";                    if($(one_time[i2]).hasClass("course-cell")){                        course = $(one_time[i2]).find("a")[0].text;                    }                    l.push(course);                }                result[i] = l;            }            let result_json = JSON.stringify(result, null, "");            let link = document.createElement("a");            link.href = URL.createObjectURL(new Blob([result_json],{                type: "application/json"            }));            link.download = ("timetable.json");            link.click();        }    }}
