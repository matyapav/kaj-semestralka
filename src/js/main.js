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

import StateHandler from './managers/state_handler.js'

window.onload = function () {

//init canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

let state = new StateHandler();
let player = new Player(canvas.width / 2, canvas.height / 2, 18, 24, 2, ResourceManager.get("trainer"), state);
state.setPlayer(player);

LevelManager.initLevels();
let level = LevelManager.actualLevel;
let walls = [], grass = [];
let controls = new Controls(state);
controls.init();
initLevel();

/////////////////////////////////////////
function initLevel() {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case 0:
                    grass.push(new Drawable(j * 32, i * 32, 32, 32, ResourceManager.get('grass')));
                    break;
                case 1:
                    walls.push(new InteractiveTile(j * 32, i * 32, 32, 32, ResourceManager.get('wall')));
                    break;
                case 2:
                case 3:
                case 4:
                    grass.push(new Drawable(j * 32, i * 32, 32, 32, ResourceManager.get('grass')));
                    let itemInfo = ItemManager.getItem(level[i][j]);
                    state.createItem(j * 32, i * 32, 32, 32, itemInfo);
                    break;
            }
        }
    }
}

//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for (let i = 0; i < walls.length; i++) {
        if (walls[i].checkCollisionWithPlayer(state.player)) {
            state.player.stopPlayer();
        }
    }
    for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].checkCollisionWithPlayer(state.player)) {
            if (state.player.isDoingPrimaryAction()) {
                state.player.stopPlayer();
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

//game updates////////
function update() {
    checkCollisions();
    state.player.update();
    draw();
}
//draw
function draw() {
    clearCanvas();
    ctx.save();
    ctx.translate(-state.player.posX + canvas.width / 2 / 2 - state.player.w, -state.player.posY + canvas.height / 2 / 2 - state.player.h);

    for (let i = 0; i < walls.length; i++) {
        walls[i].draw(ctx);
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
        let bpY = state.player.posY - canvas.height/8 - 50;
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

setInterval(update, 1000 / 60);

///animation test
};
