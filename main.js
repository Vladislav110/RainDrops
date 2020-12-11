import { drawLand } from './drawLand.js';
import { default as Drop } from './classDrop.js';
import { default as DropExp } from './classDropNew.js';

let startScreen = document.getElementById("startScreen");
let playButton = document.getElementById("playButton");
let div = document.getElementById("howToPlayText");
let option = document.getElementById("option");
let scoreDisplay = document.getElementById("score");
let header = document.getElementById("header");
let h1 = document.getElementById("h1");
let canvas = document.getElementById("land");
let canvasWraper = document.getElementById("canvas");
let fullscreen = document.getElementById("fullOnOff");
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button-form_btn");


let userAnswer = 0;
let score = 0;
let operandFirst = "";
let speed = 0;
var op1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
];
var op = ["+", "-", "*"];
let answer = 0;
let waterLevel = 9;
let waterLevelUp = 60;
let isPlayed = false; // игра запущена или нет
let isPaused = false;
let isMuted = false;
let elem = document.documentElement;
let isFullScreen = false;
let c = canvas.getContext("2d");
let x = 100;
let y = 260;
let indices = [];
let presedButton;

canvas.height = canvasWraper.offsetHeight; // на всю высоту экрана
canvas.width = canvasWraper.offsetWidth; // на всю ширину canvasWraper
let ch = canvas.height;
let cw = canvas.width;
var fall;

const modal = document.getElementById("myModal");
const btn = document.getElementById("howButton");
const span = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bla").style.display = "none";
});


playButton.onclick = function() {
    document.getElementById("game").style.backgroundColor = 'gray';
};

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


playButton.addEventListener("click", () => {
    newGame();
});

addEventListener("resize", () => {
    canvas.height = canvasWraper.offsetHeight;
    canvas.width = canvasWraper.offsetWidth;
    ch = canvas.height;
    cw = canvas.width;
});

addEventListener("keydown", buttonPress); // листнер - нажатия клавишь на Num-клавитуре

for (let i = 0; i < buttons.length; i++) {
    // листнер  - нажатия клавишь на  виртуальной клавитуре
    let number = buttons[i];
    number.addEventListener("click", buttonPress);
}

function addScore() {
    score += 100;
    scoreDisplay.innerHTML = `<img src="assets/image/star.svg" alt="" /> <span>Score: ${score}</span>`;
    if (score > 100) {
        drop1.speed = 2;
        drop2.speed = 2;
        drop3.speed = 2;
        drop4.speed = 7;
    }
    if (score > 200) {
        drop1.speed = 3;
        drop2.speed = 3;
        drop3.speed = 3;
        drop4.speed = 7;
    }
    if (score > 300) {
        drop1.speed = 4;
        drop2.speed = 4;
        drop3.speed = 4;
        drop4.speed = 7;
    }
    if (score > 600) {
        drop1.speed = 5;
        drop2.speed = 5;
        drop3.speed = 5;
        drop4.speed = 7;
    }
    if (score > 900) {
        drop1.speed = 6;
        drop2.speed = 6;
        drop3.speed = 6;
        drop4.speed = 7;
    }
    if (score > 1200) {
        drop1.speed = 7;
        drop2.speed = 7;
        drop3.speed = 7;
        drop4.speed = 7;
    }
}

let drop1 = new Drop({
    cw: cw,
    y: y,
    op1: op1,
    op: op,
    speed: speed,
    c: c,
});

let drop2 = new Drop({
    cw: cw,
    y: y,
    op1: op1,
    op: op,
    speed: speed,
    c: c
});

let drop3 = new Drop({
    cw: cw,
    y: y,
    op1: op1,
    op: op,
    speed: speed,
    c: c
});

let drop4 = new DropExp({
    cw: cw,
    y: y,
    op1: op1,
    op: op,
    speed: speed,
    c: c
});

function newGame() {
    document.getElementById("bla").style.display = "block";
    operandFirst = "";
    display.value = "";
    while (dropAnswer.length > 0) {
        dropAnswer.pop();
    }
    c = canvas.getContext("2d");
    drop1 = new Drop({
        cw: cw,
        y: y,
        op1: op1,
        op: op,
        speed: speed,
        c: c,
        ch,
        cw,
        waterLevel,
        waterLevelUp
    });

    drop2 = new Drop({
        cw: cw,
        y: y,
        op1: op1,
        op: op,
        speed: speed,
        c: c,
        ch,
        cw,
        waterLevel,
        waterLevelUp
    });

    drop3 = new Drop({
        cw: cw,
        y: y,
        op1: op1,
        op: op,
        speed: speed,
        c: c,
        ch,
        cw,
        waterLevel,
        waterLevelUp
    });

    drop4 = new DropExp({
        cw: cw,
        y: y,
        op1: op1,
        op: op,
        speed: speed,
        c: c,
        ch,
        cw,
        waterLevel,
        waterLevelUp
    });

    dropAnswer = [drop1.answer, drop2.answer, drop3.answer, drop4.answer];
    console.log(dropAnswer);

    drop1.answer;
    drop2.answer;
    drop3.answer;
    drop4.answer;

    drop1.y = randomInt(-30, -250);
    drop2.y = randomInt(-30, -250);
    drop3.y = randomInt(-30, -250);
    drop4.y = randomInt(-30, -1050);


    score = 0; // очки
    scoreDisplay.innerHTML = `<img src="assets/image/star.svg" alt="" /> <span>Score: ${score}</span>`;
    speed = 1; // скорость капель
    answer = 0; // ответ
    waterLevel = 10; // уровень воды для волн
    waterLevelUp = 60; // уровень поднятия воды для капель
    isPlayed = true; // игра запущена или нет
    isPaused = false; //поставлена пауза
    isMuted = true; // звук выключен или нет
    elem = document.documentElement;
    header.classList.remove("header-new-game");
    h1.classList.remove("h1-new-game");
    startScreen.classList.remove("start-screen-new-game");
    playButton.classList.remove("start-screen-button-new-game");
    howButton.classList.remove("start-screen-button-new-game");
    option.classList.remove("option-new-game");
    fall = setInterval(() => {
        drawLand(c, canvas, drop1, drop2, drop3, drop4, score, scoreDisplay, waterLevel);
    }, 50);
    drop1.speed = 1;
    drop2.speed = 1;
    drop3.speed = 1;
    drop4.speed = 1;
}

function gameOver(drop1, drop2, drop3, drop4, score) {
    isPlayed = false;

    drop1.ypos = randomInt(-30, -250);
    drop2.ypos = randomInt(-30, -250);
    drop3.ypos = randomInt(-30, -250);
    drop4.ypos = randomInt(-30, -250);
    drop1.speed = 0;
    drop2.speed = 0;
    drop3.speed = 0;
    drop4.speed = 0;
    header.classList.add("header-new-game");
    h1.classList.add("h1-new-game");
    startScreen.classList.add("start-screen-new-game");
    playButton.classList.add("start-screen-button-new-game");
    howButton.classList.add("start-screen-button-new-game");
    option.classList.add("option-new-game");
    if (localStorage.getItem("HiScore") > localStorage.getItem("Score")) {
        setStorage("Score", score);
    } else {
        setStorage("HiScore", score);
    }
    clearInterval(fall);
}

function setStorage(nameKey, valueKey) {
    localStorage.setItem(nameKey, valueKey);
}

function randomInt(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

fullscreen.addEventListener("click", () => {
    if (!isFullScreen) {
        elem.requestFullscreen();
        isFullScreen = true;
        fullscreen.classList.toggle("fullscreen-off");
        fullscreen.classList.toggle("fullscreen-on");
    } else {
        document.exitFullscreen();
        isFullScreen = false;
        fullscreen.classList.toggle("fullscreen-off");
        fullscreen.classList.toggle("fullscreen-on");
    }
});

let dropAnswer = [drop1.answer, drop2.answer, drop3.answer, drop4.answer];

function buttonPress(e) {
    if (e.keyCode === undefined) {
        presedButton = e.target.textContent;
    } else {
        presedButton = e.keyCode;
    }
    switch (presedButton) {
        case "0":
        case 96: // если нажата клавиша 0
            operandFirst += 0;
            display.value = +operandFirst;
            break;
        case "1":
        case 97: // если нажата клавиша 1
            operandFirst += 1;
            display.value = +operandFirst;
            break;
        case "2":
        case 98: // если нажата клавиша 2
            operandFirst += 2;
            display.value = +operandFirst;
            break;
        case "3":
        case 99: // если нажата клавиша 3
            operandFirst += 3;
            display.value = +operandFirst;
            break;
        case "4":
        case 100: // если нажата клавиша 4
            operandFirst += 4;
            display.value = +operandFirst;
            break;
        case "5":
        case 101: // если нажата клавиша 5
            operandFirst += 5;
            display.value = +operandFirst;
            break;
        case "6":
        case 102: // если нажата клавиша 6
            operandFirst += 6;
            display.value = +operandFirst;
            break;
        case "7":
        case 103: // если нажата клавиша 7
            operandFirst += 7;
            display.value = +operandFirst;
            break;
        case "8":
        case 104: // если нажата клавиша 8
            operandFirst += 8;
            display.value = +operandFirst;
            break;
        case "9":
        case 105: // если нажата клавиша 9
            operandFirst += 9;
            display.value = +operandFirst;
            break;
        case "Delete":
        case 46:
            operandFirst = ""; // удаляет всё
            display.value = +operandFirst;
            // если нажата клавиша delete
            break;
        case "Enter":
        case 13:
            if (!isPlayed) {
                number.removeEventListener("click", buttonPress);
            }
            userAnswer += operandFirst; // Enter
            console.log(`Вывожу userAnswer: ${+userAnswer}`);
            chackAnswer(dropAnswer, +userAnswer);
            userAnswer = "";
            operandFirst = "";
            display.value = "";
            break;
        case "Clear":
        case 8:
            operandFirst = "";
            display.value = +operandFirst;
            break;
    }
}

var idx = dropAnswer.indexOf(+userAnswer);
while (idx != -1) {
    indices.push(idx);
    idx = dropAnswer.indexOf(+userAnswer, idx + 1);
}

function chackAnswer(dropAnswer, userAnswer) {
    function logArrayElements(element, index) {
        if (userAnswer === element) {
            console.log(index);
            switch (index) {
                case 0:
                    drop1 = new Drop({
                        y: randomInt(-30, -550),
                    });
                    dropAnswer.splice(index, 1, drop1.answer);
                    console.log(dropAnswer);
                    addScore();
                    break;
                case 1:
                    drop2 = new Drop({});
                    dropAnswer.splice(index, 1, drop2.answer);
                    console.log(dropAnswer);
                    addScore();
                    break;
                case 2:
                    drop3 = new Drop({});
                    dropAnswer.splice(index, 1, drop3.answer);
                    console.log(dropAnswer);
                    addScore();
                    break;
                case 3:
                    drop1 = new Drop({});
                    dropAnswer.splice(0, 1, drop1.answer);
                    drop2 = new Drop({});
                    dropAnswer.splice(1, 1, drop2.answer);
                    drop3 = new Drop({});
                    dropAnswer.splice(2, 1, drop3.answer);
                    drop4 = new DropExp({});
                    dropAnswer.splice(3, 1, drop4.answer);
                    console.log(dropAnswer);
                    addScore();
                    break;
            }
        }
    }

    if (dropAnswer.includes(+userAnswer)) {
        dropAnswer.forEach(logArrayElements);
    } else {
        if (score > 0) {
            score -= 20;
        }
        play(audioFalse);
        audioFalse.currentTime = 0;

    }
}
