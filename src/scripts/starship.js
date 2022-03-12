import Mobile from './mobile.js';
import starshipImgSrc from '../assets/images/vaisseau-ballon-petit.png';// A changer par vaisseau ballon petit
import moveState from './moveState';

const DELTA_X = 0;
const DELTA_Y = 8;

export default class Starship extends Mobile  {
  static STARSHIP_HEIGHT = 39;
  constructor(x,y) {
      super(x,y,starshipImgSrc,DELTA_X,DELTA_Y);
      this.moving = moveState.STOP;
      this.shiftY = 0;
  }

  up(){
      return this.moving === moveState.DOWN;
  }

  down(){
      return this.moving === moveState.UP;
  }

  moveUp(){
      this.shiftY = -3;
      this.moving = moveState.UP;
  }

  moveDown(){
      this.shiftY = 3;
      this.moving = moveState.DOWN;
  }

  stopMoving() {
      this.moving = moveState.STOP;
  }

  move(canvas){
    if (this.moving === moveState.UP)
        this.y = Math.max(0, this.y + this.shiftY);
    if (this.moving === moveState.DOWN)
        this.y = Math.min(canvas.height - Starship.STARSHIP_HEIGHT, this.y + this.shiftY);
  }

}