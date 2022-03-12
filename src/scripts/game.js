import Starship from "./starship";
import Saucer from "./saucer";
import Shoot from "./shoot";

const alea = (a, b) =>{
    const min = Math.ceil(a);
    const max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.starship = new Starship(40,canvas.height / 2);
        this.saucers = new Array();
        this.shoots = new Array();
        this.score = 0;
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
        this.raf2 = null;
        this.interval = null;
    }

    addSaucer(){
        const x =this.canvas.width;
        const y = alea(0, this.canvas.height - Saucer.SAUCER_HEIGHT);
        const deltaX = alea(-1, -5);
        this.saucers.push(new Saucer(x, y, deltaX));
    }

    addShoot(){
        const x = this.starship.x;
        const y = this.starship.y + 30;
        this.shoots.push(new Shoot(x, y));
    }

    startAndStop(){
        if (!this.raf2) {
            this.raf2 = window.requestAnimationFrame(this.beginAttack.bind(this));
        }
        else{
                this.raf2 = null;
                window.clearInterval(this.interval);
            }
    }

    beginAttack(){
        this.interval = window.setInterval(()=> {
            const rand = alea(1, 2);
            if (rand === 2)
                this.addSaucer();
        }, 750);
    }

    moveAndDraw(){
        // effacer le canvas
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.starship.move(this.canvas);
        this.starship.draw(this.ctx);

        this.saucers.forEach((saucer, index) => {
            saucer.move(this.canvas);
            if (saucer.x < -Saucer.SAUCER_WIDTH || saucer.y > this.canvas.height) {
                this.saucers.splice(index, 1);
                if(saucer.x < -Saucer.SAUCER_WIDTH) {
                    this.score -= 1000;
                    document.getElementById("score").innerHTML = this.score.toString();
                }
            }
            saucer.draw(this.ctx);
        })
        this.shoots.forEach((shoot, index) =>{
            shoot.move(this.canvas);
            if (shoot.x > this.canvas.width)
                this.shoots.splice(index, 1);
            if (shoot.collisionWithSaucers(this.saucers)) {
                this.shoots.splice(index, 1);
                this.score += 200;
                document.getElementById("score").innerHTML = this.score.toString();
            }
            shoot.draw(this.ctx);
        })

        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.starship.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.starship.moveDown();
                break;
            case " ":
                document.getElementById("nouvelleSoucoupe").blur();
                document.getElementById("flotteSoucoupes").blur();
                this.addShoot();
                break;
            default: return;
        }
        event.preventDefault();
    }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.starship.stopMoving();
                break;
            case "ArrowDown":
            case "Down":
                this.starship.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
}



// crée et exporte l'instance unique de Game
//const theGame = new Game();
//export default theGame;


