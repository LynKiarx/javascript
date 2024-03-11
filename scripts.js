const txtscore = document.querySelector("#txtxscore");
const txtresult = document.querySelector("#txtresult");

txtscore.addEventListener("Keyup", function(){

    if(txtscore.value >= 50){
        txtresult.value = "Pass";
    }
    else{
        txtresult.value = "Fail";
    }
});

var show = 0;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.onclick = function(){
    if (show == 0){
        btn1.value = "show";
        DeviceMotionEvent.style.display = "block";
        show = 0 ;
    }
    };
}