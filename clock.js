var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var digitalClock = document.getElementById("digitalClock");

function setClockTime(){
    const day = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes();
    const ss = day.getSeconds();

    const hourDeg = (hh * 30) + (mm * 0.5); // every 60min, rotates 30Deg. then 30/60 = 0.5 per minute
    const minuteDeg = (mm * 6) + (mm * 0.1); // every 60 second, 6 deg then 6/60 = 0.1
    const secondDeg = (ss * 6);
    
    hour.style.transform = `rotateZ(${hourDeg}deg)`;
    minute.style.transform = `rotateZ(${minuteDeg}deg)`;
    second.style.transform = `rotateZ(${secondDeg}deg)`;

    digitalClock.innerText = `${hh%12<10?'0':''}${hh % 12}:${mm<10?'0':''}${mm} ${hh >12?'AM':'PM'}`;
}

setClockTime();

setInterval(setClockTime,1000);