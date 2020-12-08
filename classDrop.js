const FILL_BLUE = "rgba(0,0,155, 0.5)";
const FILL_DARK_BLUE = "rgba(0,0,60, 0.5)";

 export default class Drop {
    constructor(options) {
        this.x = randomInt(280, options.cw - 30);
        this.y = options.y;
        this.op1 = options.op1;
        this.op2 = options.op2;
        this.op = options.op;
        this.speed = options.speed = 1;
        this.c = options.c;
        this.answer;
    }

    get answer() {
        if (this.op1 > this.op2) {
            var operand1 = this.op2;
            var operand2 = this.op1;
        } else {
            var operand2 = this.op2;
            var operand1 = this.op1;
        }
        if (this.op == "+") {
            return operand2 + operand1;
        }
        if (this.op == "-") {
            return operand2 - operand1;
        }
        if (this.op == "*") {
            return operand2 * operand1;
        }
    }

    get waterLevel() {
        if (this.y >= ch - waterLevelUp) {
            this.y = -ch;
            waterLevelUp += 60;
            waterLevel -= 1;
            play(audioDrop[randomInt(0, 2)]);
            this.xpos = randomInt(30, cw - 30);
            this.ypos = randomInt(-30, -600);
            if (score <= 0) {
                score = 0;
            } else {
                score -= 20;
            }
        }
    }
    get drawDrop() {
        if (this.op1 > this.op2) {
            var operand1 = this.op2;
            var operand2 = this.op1;
        } else {
            var operand2 = this.op2;
            var operand1 = this.op1;
        }
        this.c.beginPath();
        this.c.fillStyle = FILL_BLUE;
        this.c.moveTo(this.x - 60, this.y);
        this.c.lineTo(this.x, this.y - 150);
        this.c.lineTo(this.x + 60, this.y);
        this.c.arc(this.x, this.y, 60, 0, Math.PI);
        this.c.closePath();
        this.c.fill();

        this.c.beginPath();
        this.c.arc(this.x, this.y + 4, 50, 0, Math.PI * 2);
        this.c.fillStyle = FILL_DARK_BLUE;
        this.c.fill();
        this.c.closePath();

        this.c.beginPath();
        this.c.textAlign = "center";
        this.c.fillStyle = "white";
        this.c.font = "bold 40px serif";
        this.c.fillText(`${operand2}`, this.x, this.y);
        this.c.fillText(`${this.op}`, this.x - 35, this.y + 20);
        this.c.fillText(`${operand1}`, this.x, this.y + 40);
        this.c.closePath();
    }

    set xpos(xpos) {
        this.x = xpos;
    }
    set ypos(ypos) {
        this.y += ypos + this.speed;
    }
}

function randomInt(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}