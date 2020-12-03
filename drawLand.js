export default function drawLand(drawBackground,animateWave,setStorage,gameOver,drop1,drop2,drop3,drop4, waterLevel,score) {
    drawBackground();
    animateWave();
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