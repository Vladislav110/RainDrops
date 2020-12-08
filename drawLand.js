const FILL_BLUE = "rgba(0,0,155, 0.5)";
const FILL_TURQUISE = "#22abcd";
let amplitude = 10;
let increment1 = frequency;
let increment2 = frequency;
let frequency = 0.008;
let w = 0.5;

export function drawLand(c, canvas, drop1, drop2, drop3, drop4, score, scoreDisplay, waterLevel) {

    drawBackground(c, canvas);
    animateWave(c, waterLevel, canvas.width, canvas.height);

    drop1.drawDrop;
    drop2.drawDrop;
    drop3.drawDrop;
    drop4.drawDrop;
    drop1.waterLevel;
    drop2.waterLevel;
    drop3.waterLevel;
    drop4.waterLevel;
    drop1.ypos = 0;
    drop2.ypos = 0;
    drop3.ypos = 0;
    drop4.ypos = 0;
    localStorage.setItem("Score", score);
    scoreDisplay.innerHTML = ` <img src="assets/image/star.svg" alt="" /> <span>Score: ${score}</span>`;

    if (waterLevel <= 7) {
        gameOver();
    }
}

function drawBackground(c, canvas) {
    c.fillStyle = FILL_TURQUISE;
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fill();

    var img = new Image();
    img.src = "assets/image/stone.svg";
    c.drawImage(img, canvas.height / 25, canvas.height / 1.4, 600, 500); //рисуем картинку в канвас
}

function animateWave(c, waterLevel, cw, ch) {
    c.beginPath();
    c.moveTo(0, ch / 2);
    wave(c, cw, ch, waterLevel, (increment2 -= 0.03));
    c.stroke();
    c.strokeStyle = FILL_BLUE;
    c.closePath();

    c.beginPath();
    c.moveTo(0, ch / 2);
    wave(c, cw, ch, waterLevel - 1, (increment1 += 0.05));
    c.stroke();
    c.strokeStyle = FILL_BLUE;
    c.closePath();

    w += 0.05;
}

function wave(c, cw, ch, waterLevel, increment) {
    for (let x = 0; x < cw; x++) {
        for (let y = waterLevel - 1; y < 20; y++) {
            c.lineTo(
                x,
                y * 60 +
                ch / 2 +
                Math.sin(x * frequency + increment) * amplitude * Math.sin(w)
            );
        }
    }
}
