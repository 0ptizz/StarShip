const DELTA_X = 0;
const DELTA_Y = 0;

export default class Mobile {


    constructor(x, y, src, deltaX = DELTA_X, deltaY = DELTA_Y){
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.createImage(src);
    } 

    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }
    createImage(src) {
        const mobileImg = new Image();
        mobileImg.src = src;
        return mobileImg;
    }

    move(canvas){
        if (this.x + this.deltaX < 0)
            this.deltaX = - this.deltaX;

        if (this.y + this.deltaY < 0)
            this.deltaY = - this.deltaY;

        if (this.x + this.deltaX > (canvas.width - Mobile.MOBILE_WIDTH))
          this.deltaX = - this.deltaX;


        if (this.y + this.deltaY > (canvas.height - Mobile.MOBILE_WIDTH))
            this.deltaY = - this.deltaY;

        this.x += this.deltaX;
        this.y += this.deltaY;
    }


}