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
const divMoney = document.querySelector(".stats_money");
const divLiter = document.querySelector(".stats_water");
const spanE = document.querySelector("#euro");
const spanL = document.querySelector("#liter");
const pMoneySaved = document.createElement("p");
const pLiterSaved = document.createElement("p");
const moyenneTemps = 20; // en secondes
const moyenneLitre = moyenneTemps * 0.25; // litres par sec
const prixLittre = 0.00005; // prix Littre par sec
const prixMoyen = moyenneTemps * prixLittre;
let economieEuro = 0; // par mois
let economieLittre = 0; // par mois

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

document.getElementById("twitter").onclick = function() {
    let score = timer();
    console.log(score);
    window.open(
        `https://twitter.com/intent/tweet?text=Regardez j' ai mis ${score} &hashtags=Rapidouche&url=https://www.youtube.com/watch?v=LV_OXlBhVS4`,
        "twitter",
        "height=300, width=550, scrollbars=0, menubar=0"
    );
};

document.getElementById("facebook").onclick = function() {
    window.open(
        "https://www.facebook.com/sharer/sharer.php?t=Regardez j' ai mis x temps&u=https://www.youtube.com/watch?v=LV_OXlBhVS4&amp;src=sdkpreparse",
        "facebook",
        "height=300, width=550, scrollbars=0, menubar=0"
    );
};

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
    let score = timer();
    p.innerText = `Votre score est de : ${score}`;
    divScore.appendChild(p);
    let tempsDouche = second;

    economieEuro = (prixMoyen - tempsDouche * prixLittre).toFixed(3);
    economieLittre = (moyenneLitre - tempsDouche * 0.25).toFixed(3);
    console.log(economieEuro);
    console.log(economieLittre);
    if (economieEuro > 0) {
        spanE.innerHTML = "";
        spanE.innerText = `${economieEuro} € économisé`;
        // pMoneySaved.classList.add("euro");
        document.location.href="?page=endshower"
    } else {
        spanE.innerHTML = "";
        spanE.innerText = `${economieEuro} € perdu`;
        // pMoneySaved.classList.add("euro");
    }
    if (economieLittre > 0) {
        spanL.innerHTML = "";
        spanL.innerText = `${economieLittre} L économisé`;
        // spanL.classList.add("liter");
    } else {
        spanL.innerHTML = "";
        spanL.innerText = `${economieLittre} L gaspillé`;
        // pLiterSaved.classList.add("liter");
    }

    divMoney.appendChild(pMoneySaved);
    divLiter.appendChild(pLiterSaved);
    clearInterval(base);
    resetFunc();

    if ($("#play").hasClass("pause")) {
        $("#animateCircle").removeClass("addAnimation");
        playFunc();
    }
}