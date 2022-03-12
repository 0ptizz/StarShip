import Starship from './starship.js';
import Saucer from './saucer.js';
// importation de l'instance de Game créée dans Game.js
//import theGame from './game.js';
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    const canvas = document.getElementById("stars");
    const game = new Game(canvas);
    game.starship.draw(game.ctx);
    window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
    window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
    document.getElementById("nouvelleSoucoupe").addEventListener("click", () => game.addSaucer());
    document.getElementById("flotteSoucoupes").addEventListener("click", () => game.startAndStop());
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
