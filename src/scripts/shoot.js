import Mobile from './mobile.js';
import shootImgSrc from '../assets/images/tir.png';
import Saucer from "./saucer";

const DELTA_X = 8;
const DELTA_Y = 0;

export default class Shoot extends Mobile  {
    static SHOOT_HEIGHT = 8;
    static SHOOT_WIDTH = 32;
    constructor(x,y) {
        super(x, y, shootImgSrc, DELTA_X, DELTA_Y);
    }

    move(canvas){
        this.x += DELTA_X;
    }

    collisionWith(saucer){
        const p1X = (this.x > saucer.x ? this.x : saucer.x);
        const p1Y = (this.y > saucer.y ? this.y : saucer.y);

        const p2X = (this.x + Shoot.SHOOT_WIDTH> saucer.x + Saucer.SAUCER_WIDTH ? saucer.x + Saucer.SAUCER_WIDTH : this.x + Shoot.SHOOT_WIDTH);
        const p2Y = (this.y + Shoot.SHOOT_HEIGHT > saucer.y + Saucer.SAUCER_HEIGHT ? saucer.y + Saucer.SAUCER_HEIGHT : this.y + Shoot.SHOOT_HEIGHT);


        return (p1X < p2X && p1Y < p2Y);
    }

    collisionWithSaucers(saucers){
        /*
        saucers.forEach(saucer => {
            if (this.collisionWith(saucer)) {
                saucer.fallDown();
                return true;
            }
        });

        return false;
        */
        const test = saucers.filter(saucer => this.collisionWith(saucer) && !saucer.isFalling);
        test.forEach(truc => truc.fallDown());
        return test.some(truc =>truc.isFalling);
    }
}