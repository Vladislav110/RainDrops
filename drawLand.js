export default function drawLand(drawBackground,animateWave,setStorage,gameOver,drop1,drop2,drop3,drop4, waterLevel,score) {
    drawBackground();
    function animateWave() {
        function wave(waterLevel, increment) {
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
    
        c.beginPath();
        c.moveTo(0, ch / 2);
        wave(waterLevel, (increment2 -= 0.03));
        c.stroke();
        c.strokeStyle = FILL_BLUE;
        c.closePath();
    
        c.beginPath();
        c.moveTo(0, ch / 2);
        wave(waterLevel - 1, (increment1 += 0.05));
        c.stroke();
        c.strokeStyle = FILL_BLUE;
        c.closePath();
    
        w += 0.05;
    }
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
    setStorage("Score", score);
    scoreDisplay.innerHTML = ` <img src="assets/image/star.svg" alt="" /> <span>Score: ${score}</span>`;

    if (waterLevel <= 7) {
        gameOver();
    }
}

