import Mobile from './mobile.js';
import saucerImgSrc from '../assets/images/flyingSaucer-petit.png';

const DELTA_X = -3;
const DELTA_Y = 0;

export default class Saucer extends Mobile  {
    static SAUCER_HEIGHT = 36;
    static SAUCER_WIDTH = 48;
    constructor(x,y) {
        super(x, y, saucerImgSrc, DELTA_X, DELTA_Y);
        this.isFalling = false;
    }

    move(canvas){
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    fallDown(){
        this.isFalling = true;
        this.deltaX = 0;
        this.deltaY = 3;
    }
}