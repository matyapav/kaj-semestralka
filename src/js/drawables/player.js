/**
 * Created by Pavel on 01.04.2017.
 */
//TODO jeden spolecny predek pro vsechny co se budou hybat
import Backpack from './backpack.js'
import Animation from '../utils/animation.js'
import Drawable from './drawable.js'
import Controls from '../managers/controls.js'

export default class Player extends Drawable{

    _state;
    _dx;
    _dy;
    _speed;
    _score;
    _backpack;
    _primaryAction;
    _animation;

    constructor(posX, posY, w, h, speed, imgSrc, state) {
        super(posX, posY, w, h, imgSrc);
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
        this._animation = new Animation(this.image, 4, 150, 0, [32, 30], [6,42], [this.w,this.h]);
        this._state = state;
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

    stopPlayer() {
        this._dx = 0;
        this._dy = 0;
        this._animation.stopAnimation();
    }

    pickUpItem(item){
        this.backpack.addToBackpack(item);
    }


    performSelectedBackpackAction(){
        let action = this.backpack._itemActions[this.backpack._itemActionsSelectedIndex];
        let item = this.backpack._backpack_items[this.backpack._selectedIndex];
        switch (action){
            case 'Use':
                break;
            case 'Info':
                const canvas = document.getElementById("myCanvas");
                let dialogX = this.posX - canvas.width / 8 + this.w / 2;
                let dialogY = this.posY + canvas.height / 2 - 200;
                let dialogHeight = 50;
                let dialogWidth = canvas.width / 4;
                let text = item.name + " is " + item.desc;
                this._state.createDialog(dialogX, dialogY, dialogWidth, dialogHeight, text);
                this._state.controls = Controls.DIALOG;
                this._state.lastConstrols = Controls.BACKPACK;
                break;
            case 'Drop': //drop one TODO drop X and drop All
                this._state.createItem(this.posX, this.posY, 32, 32, item);
                this.backpack.decreaseQuantityOfItemOnIndex(this.backpack._selectedIndex);
                break;
        }
        this.backpack.toggleItemActions();
    }

    draw(ctx){
        //DRAW PLAYER BOUNDS
        // ctx.beginPath();
        // ctx.fillStyle = "white";
        // ctx.fillRect(this.posX, this.posY, this.w,this.h);
        // ctx.closePath();
        this._animation.drawActualFrame(ctx, this.posX,this.posY)
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

    get playerAnimation() {
        return this._animation;
    }
}