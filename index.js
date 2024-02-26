
window.onload = function () {
var tens = 0;
var second  = 0;
var minute = 0;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
var apptens = document.getElementById("tens");
var appsecond  = document.getElementById("second");
var appminute = document.getElementById("minute");
var text = document.getElementById("text");


var Interval ;


start.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer , 100);

}
stop.onclick = function(){
    clearInterval(Interval);
    text.innerHTML = `Your time was ${minute}:${second}:${tens}`;


}
reset.onclick = function (){
    clearInterval(Interval);
    tens = 0;
    second = 0;
    minute = 0;
    apptens.innerHTML = tens;
    appsecond.innerHTML = second;
    appminute.innerHTML = minute;
}


function startTimer () {
    tens++;

    if (tens < 100 ) {
        apptens.innerHTML = "" + tens;
    }
    else if( tens > 100   && second < 60){
        second ++;
        appsecond .innerHTML = "" + second ;
        tens = 0;
        apptens.innerHTML = "" + 0;
    }
    else if(second > 59 && minute < 60) {     
        minute++;
        appminute.innerHTML = "" + minute;
        second = 0;
        appsecond.innerHTML = "" + 0;
        tens = 0;
        apptens.innerHTML = "" + 0;

    }
    }
}






  

 
    
   











  