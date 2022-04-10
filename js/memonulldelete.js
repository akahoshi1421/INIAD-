$(function(){
    for(let stg in localStorage){
        if(stg.indexOf("https") != -1){
            let l = JSON.parse(localStorage[stg]);
            let l_new = [];

            for(let i = 0; i < l.length; i++){
                if(l[i]){
                   l_new.push(l[i]); 
                }
            }

            if(l_new.length == 0){
                delete localStorage[stg];
            }
            else{
                localStorage[stg] = JSON.stringify(l_new);
            }
        }
    }
});