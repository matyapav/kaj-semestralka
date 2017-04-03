/**
 * Created by Pavel on 01.04.2017.
 */
//TODO jeden spolecny predek pro vsechny co se budou hybat
import Backpack from './backpack.js'
import Animation from './animation.js'
import Tile from './tile.js'

export default class Player extends Tile{
    _dx;
    _dy;
    _speed;
    _score;
    _backpack;
    _primaryAction;
    _animation;

    constructor(posX, posY, w, h, speed) {
        super(posX, posY, w, h);
        this._posX = posX;
        this._posY = posY;
        this._w = w;
        this._h = h;
        this._dx = 0;
        this._dy = 0;
        this._speed = speed;
        this._score = 0;
        this._primaryAction = false;
        this._backpack = new Backpack();

        let sprite = new Image();
        sprite.src = '/img/trainer.png';
        this._animation = new Animation(sprite, 4, 150, 0, [32, 30], [6,42], [this.w,this.h]);
    }

    doPrimaryAction(){
        //TODO nad timhle jeste pouvazovat
        if(this._primaryAction == false){
            // console.log('doing');
            this._primaryAction = true;
            setTimeout(function () {
                this._primaryAction = false;
                //console.log('not doing');
            }.bind(this), 500);
        }
    }

    isDoingPrimaryAction(){
        return this._primaryAction;
    }

    addToScore(points){
        this._score += points;
    }

    update(){
        this._posX += this._dx;
        this._posY += this._dy;
    }

    draw(ctx){
        //DRAW PLAYER BOUNDS
        // ctx.beginPath();
        // ctx.fillStyle = "white";
        // ctx.fillRect(this.posX, this.posY, this.w,this.h);
        // ctx.closePath();
        this._animation.drawActualFrame(ctx, this.posX,this.posY)
    }

    animate(){

    }

    set dx(value) {
        this._dx = value;
    }

    set dy(value) {
        this._dy = value;
    }

    get dx() {
        return this._dx;
    }

    get dy() {
        return this._dy;
    }

    get speed() {
        return this._speed;
    }

    get score() {
        return this._score;
    }

    get backpack() {
        return this._backpack;
    }
}