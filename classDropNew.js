import { default as Drop } from './classDrop.js'

const FILL_ORANGE = "#f3d44a";
const FILL_BLUE = "rgba(0,0,155, 0.5)";

export default class DropExp extends Drop {
    constructor(options) {
        super(options);
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
        this.c.fillStyle = FILL_ORANGE;
        this.c.fill();
        this.c.closePath();

        this.c.beginPath();
        this.c.textAlign = "center";
        this.c.fillStyle = "BLACK";
        this.c.font = "bold 40px serif";
        this.c.fillText(`${operand2}`, this.x, this.y);
        this.c.fillText(`${this.op}`, this.x - 35, this.y + 20);
        this.c.fillText(`${operand1}`, this.x, this.y + 40);
        this.c.closePath();
    }
}