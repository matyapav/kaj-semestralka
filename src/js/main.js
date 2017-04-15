/**
 * Created by Pavel on 01.04.2017.
 */
import Player from './drawables/player.js';
import Drawable from './drawables/drawable.js'
import InteractiveTile from './drawables/interactive_tile.js'
import Controls from './managers/controls.js'
import Item from './drawables/item.js'
import ItemManager from './managers/item_manager.js'
import LevelManager from './managers/level_manager.js'
import ResourceManager from './managers/resource_manager.js'
import {FPS, TILE_SIZE} from './utils/constants.js';

import StateHandler from './managers/state_handler.js'

window.onload = function () {

//init canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

let state = new StateHandler();


LevelManager.initLevels();
let level = LevelManager.actualLevel;
let grass = [];
let controls = new Controls(state);
controls.init();
initLevel();

/////////////////////////////////////////
function initLevel() {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case -1:
                    let player = new Player(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get("trainer"), state);
                    state.setPlayer(player);
                case 0:
                    grass.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('grass')));
                    break;
                case 1:
                    state.walls.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('wall')));
                    break;
                case 2:
                case 3:
                case 4:
                    grass.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('grass')));
                    let itemInfo = ItemManager.getItem(level[i][j]);
                    state.createItem(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, itemInfo);
                    break;
            }
        }
    }
}

//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].checkCollisionWithPlayer(state.player)) {
            if (state.player.isDoingPrimaryAction()) {
                state.controls = Controls.DIALOG;
                state.lastConstrols = Controls.MOVING;
                let dialogX = state.player.posX - canvas.width / 8 + state.player.w / 2;
                let dialogY = state.player.posY + canvas.height / 2 - 200;
                let dialogHeight = 50;
                let dialogWidth = canvas.width / 4;
                state.createDialog(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + state.items[i].itemInfo.name);
                state.createDialog(dialogX, dialogY, dialogWidth, dialogHeight,
                    state.items[i].itemInfo.name + " is " + state.items[i].itemInfo.desc);
                state.player.pickUpItem(state.items[i].itemInfo);
                state.items.splice(i, 1); //remove from map
            }
        }
    }
}

let interval     =    1000/FPS,
    lastTime     =    (new Date()).getTime(),
    currentTime  =    0,
    delta = 0;

//game loop////////
function gameLoop() {
    checkCollisions();
    window.requestAnimationFrame(gameLoop);

    currentTime = (new Date()).getTime();
    delta = (currentTime-lastTime);

    if(delta > interval) {
        state.player.update();
        draw();
        window.requestAnimationFrame(gameLoop);
        lastTime = currentTime - (delta % interval);
    }
}
//draw
function draw() {
    clearCanvas();
    ctx.save();
    ctx.translate(-state.player.posX + canvas.width / 2 / 2 - state.player.w, -state.player.posY + canvas.height / 2 / 2 - state.player.h);

    for (let i = 0; i < state.walls.length; i++) {
        state.walls[i].draw(ctx);
    }
    for (let i = 0; i < grass.length; i++) {
        grass[i].draw(ctx);
    }
    for (let i = 0; i < state.items.length; i++) {
        state.items[i].draw(ctx);
    }

    state.player.draw(ctx);
    if (state.dialogs.length != 0) {
        state.dialogs[0].draw(ctx);
    }

    if (state.backpackOpened) {
        let bpX = state.player.posX + canvas.width / 8 + state.player.w / 2;
        let bpY = state.player.posY - canvas.height/8 - 40;
        let bpHeight = canvas.height/2 - 15;
        let bpWidth = 160;
        state.player.backpack.setPosition(bpX, bpY, bpWidth, bpHeight);
        state.player.backpack.draw(ctx);
    }
    ctx.restore()
}

function clearCanvas() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


gameLoop();

};
