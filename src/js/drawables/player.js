/**
 * Created by Pavel on 01.04.2017.
 */
//TODO jeden spolecny predek pro vsechny co se budou hybat
import Backpack from './backpack.js'
import Animation from '../utils/animation.js'
import Drawable from './drawable.js'
import Controls from '../managers/controls.js'
import LevelManager from '../managers/level_manager.js'
import {FPS, TILE_SIZE, WALL} from '../utils/constants.js'

export default class Player extends Drawable{

    _state;
    _dx;
    _dy;
    _score;
    _backpack;
    _primaryAction;
    _animation;
    posXBackup;
    posYBackup;
    playerSpeed;

    constructor(posX, posY, w, h, imgSrc, state) {
        super(posX, posY, w, h, imgSrc);
        this._posX = posX;
        this._posY = posY;
        this._w = w;
        this._h = h;
        this._dx = 0;
        this._dy = 0;
        this._score = 0;
        this._primaryAction = false;
        this._backpack = new Backpack();
        this._animation = new Animation(this.image, 4, 150, 0, [32, 30], [6,42], [this.w,this.h]);
        this._state = state;
        this.playerSpeed = TILE_SIZE / (FPS / (1000 / 250));
        console.log(this.playerSpeed);
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

    //TODO zkusit ucesat :D
    update(){
        if (this._state.keyState[37] && this._state.moveTimer == null) {
            this._dy = 0;
            let isColliding =
                LevelManager.actualLevel[(this._posY) / TILE_SIZE][(this._posX - TILE_SIZE) / TILE_SIZE] == WALL;

            (()=> {
                if (!isColliding) {
                    this.posXBackup = this._posX;
                    this._dx = -this.playerSpeed;

                    this._state.moveTimer = setTimeout(()=> {
                        this._posX = this.posXBackup - TILE_SIZE;
                        this.posXBackup = this.posXBackup - TILE_SIZE;
                        this._state.moveTimer = null;
                        this._dx = 0;
                        console.log("cleared");
                    }, 250);
                    this._animation.runAnimation();
                } else {
                    this._animation.stopAnimation();
                }
            })();

            this._animation.setFromToY([54, 42]);
        }
        else if (this._state.keyState[38] && this._state.moveTimer == null) {
            this._dx = 0;
            let isColliding = LevelManager.actualLevel[(this._posY - TILE_SIZE) / TILE_SIZE][(this._posX) / TILE_SIZE] == 1;
            (()=> {
                if (!isColliding) {
                    this.posYBackup = this._posY;
                    this._dy = -this.playerSpeed;

                    this._state.moveTimer = setTimeout(()=> {
                        this._posY = this.posYBackup - TILE_SIZE;
                        this.posYBackup = this.posYBackup - TILE_SIZE;
                        this._state.moveTimer = null;
                        this._dy = 0;
                    }, 250);
                    this._animation.runAnimation();
                } else {
                    this._animation.stopAnimation();
                }
            })();
            this._animation.setFromToY([150, 42]);

        }
        else if (this._state.keyState[39] && this._state.moveTimer == null) {
            this._dy = 0;
            let isColliding = LevelManager.actualLevel[(this._posY) / TILE_SIZE][(this._posX + TILE_SIZE) / TILE_SIZE] == 1;
            (()=> {
                if (!isColliding) {
                    this.posXBackup = this._posX;
                    this._dx = this.playerSpeed;
                    this._state.moveTimer = setTimeout(()=> {
                        this._posX = this.posXBackup + TILE_SIZE;
                        this.posXBackup = this.posXBackup + TILE_SIZE;
                        this._state.moveTimer = null;
                        this._dx = 0;
                    }, 250);
                    this._animation.runAnimation();
                } else {
                    this._animation.stopAnimation();
                }
            })();
            this._animation.setFromToY([102, 42]);
        }
        else if (this._state.keyState[40] && this._state.moveTimer == null) {
            this._dx = 0;
            let isColliding = LevelManager.actualLevel[(this._posY + TILE_SIZE) / TILE_SIZE][(this._posX) / TILE_SIZE] == 1;

            (()=> {
                if (!isColliding) {
                    this.posYBackup = this._posY;
                    this._dy = this.playerSpeed;
                    this._state.moveTimer = setTimeout(()=> {
                        this._posY = this.posYBackup + TILE_SIZE;
                        this.posYBackup = this.posYBackup + TILE_SIZE;
                        this._state.moveTimer = null;
                        this._dy = 0;
                    }, 250);
                    this._animation.runAnimation();
                } else {
                    this._animation.stopAnimation();
                }
            })();

            this._animation.setFromToY([6, 42]);
        }

        this._posX+= this._dx;
        this._posY += this._dy;

        // if(!this._state.keyState[37] || !this._state.keyState[38] || !this._state.keyState[39] || !this._state.keyState[40]){
        //     this._animation.stopAnimation();
        //     this._dx = 0;
        // }

    }

    isMoving(){
        return this._dx != 0 || this._dy || 0;
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