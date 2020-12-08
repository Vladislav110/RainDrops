export default function animateWave(waterLevel,cw, c, ch, w) {
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