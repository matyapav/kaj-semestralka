/**
 * Created by Pavel on 01.04.2017.
 */
//TODO jeden spolecny predek pro vsechny co se budou hybat
import Backpack from './backpack.js'
export default class Player {
    _posX;
    _posY;
    _w;
    _h;
    _dx;
    _dy;
    _speed;
    _score;
    _backpack
    _primaryAction;

    constructor(posX, posY, w, h, speed) {
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
        ctx.beginPath();
        ctx.rect(this._posX, this._posY, this._w, this._h);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    get posX() {
        return this._posX;
    }

    set posX(value) {
        this._posX = value;
    }

    get posY() {
        return this._posY;
    }

    set posY(value) {
        this._posY = value;
    }

    get w() {
        return this._w;
    }

    get h() {
        return this._h;
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