console.log("Let's goooo");

// code principal 

let hoursNeedle    = document.querySelector(".hour-hand");
let minutesNeedle  = document.querySelector(".min-hand");
let secondsNeedle  = document.querySelector(".second-hand");



// function 

function setTime(){

    // On récupère l'heure exacte
    let maDate   = new Date();
    
    let hours    = maDate.getHours();
    let minutes  = maDate.getMinutes();
    let seconds  = maDate.getSeconds();
    // console.log(hours, minutes, seconds);
    

    // 360° / 60 minutes et seconde - 360°/12 heures (car c'est le ° qu'on veut à la fin)
    // un tour complet quand atteint 60s
    // les ° sont des angles 
    let hoursMove       =  ((hours/12)*360)    +90;
    let minutesMove     =  ((minutes/60)*360)  +90;
    let secondsMove     =  ((seconds/60)*360)  +90;


    // on leur change le style CSS en rotate
    hoursNeedle.style.transform    = `rotate(${hoursMove}deg)`;
    minutesNeedle.style.transform  = `rotate(${minutesMove}deg)`;
    secondsNeedle.style.transform  = `rotate(${secondsMove}deg)`;
}


setInterval(setTime, 1000);
setTime();
