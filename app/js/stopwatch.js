// const button = document.querySelector('button')
// const p = document.createElement('p')
// const container = document.querySelector('.container-score')
// let score = 0
// if (button) {
//     button.addEventListener('click', () => {
//         score += 10
//         p.innerHTML = score
//         if (score >= 100) {
//             alert('Gagné')
//         }
//     })
//     container.appendChild(p)
// }

// Chrono
// default value
let base;
let playPause = 0;
const milli = document.querySelector("#millisecond");
const sec = document.querySelector("#second");
const minu = document.querySelector("#minute");
const h = document.querySelector("#hour");
const p = document.createElement("p");
const divScore = document.querySelector(".container-score");
const playy = document.getElementById("play");
const animateCircle = document.querySelector("#animateCircle");

function playFunc() {
    playPause = playPause + 1;
    if (playPause === 1) {
        play();
        playy.classList.add("pause");
        // document.querySelector("#animateCirle").classList.add("addAnimation");
        // document
        //     .querySelector("#animateCirle.addAnimation")
        //     .css("animation-play-state", "running");
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state", "running");
    } else if (playPause === 2) {
        playy.classList.remove("pause");
        // document
        //     .querySelector("#animateCirle")
        //     .css("animation-play-state", "paused");
        $("#animateCircle").css("animation-play-state", "paused");
        playPause = 0;
        stop();
    }
}

function play() {
    base = setInterval(timer, 10); //milliseconds
}

function stop() {
    let score = timer();
    p.innerText = `Votre score est de : ${score}`;
    divScore.appendChild(p);
    clearInterval(base);
}

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
// returned values
let millisecondVal = 0;
let secondVal = 0;
let minuteVal = 0;
let hourVal = 0;

function timer() {
    millisecondVal = updateTime(millisecond);
    secondVal = updateTime(second);
    minuteVal = updateTime(minute);
    hourVal = updateTime(hour);

    millisecond = ++millisecond;

    if (millisecond === 100) {
        millisecond = 0;
        second = ++second;
    }
    if (second === 60) {
        second = 0;
        minute = ++minute;
    }
    if (minute === 60) {
        minute = 0;
        hour = ++hour;
    }

    milli.innerHTML = millisecondVal;
    sec.innerHTML = secondVal;
    minu.innerHTML = minuteVal;
    h.innerHTML = hourVal;
    let score = 0;
    if (millisecond < 10 && second < 10 && minute < 10 && hour < 10) {
        score = `0${hour} h 0${minute} m 0${second} s 0${millisecond}`;
    } else if (millisecond > 10 && second < 10 && minute < 10 && hour < 10) {
        score = `0${hour} h 0${minute} m 0${second} s ${millisecond}`;
    } else if (millisecond > 10 && second > 10 && minute < 10 && hour < 10) {
        score = `0${hour} h 0${minute} m ${second} s ${millisecond}`;
    } else if (millisecond > 10 && second > 10 && minute > 10 && hour < 10) {
        score = `0${hour} h ${minute} m ${second} s ${millisecond}`;
    } else if (millisecond > 10 && second > 10 && minute > 10 && hour > 10) {
        score = `${hour} h ${minute} m ${second} s ${millisecond}`;
    }

    return score;
}
// update time every seconds
function updateTime(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}

function resetFunc() {
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;

    milli.innerHTML = "00";
    sec.innerHTML = "00";
    minuinnerHTML = "00";
    h.innerHTML = "00";

    if (!$("#play").hasClass("pause")) {
        $("#animateCircle").removeClass("addAnimation");
    } else {
        $("#animateCircle").removeClass("addAnimation");
        setTimeout(() => {
            $("#animateCircle").addClass("addAnimation");
        }, 10);
    }
}

function stopFunc() {
    clearInterval(base);
    resetFunc();

    if ($("#play").hasClass("pause")) {
        $("#animateCircle").removeClass("addAnimation");
        playFunc();
    }
}