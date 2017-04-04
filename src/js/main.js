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
import Dialog from './drawables/dialog.js'
import ResourceManager from './managers/resource_manager.js'

//init canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//init game stuff
let state = {
    player: new Player(canvas.width / 2, canvas.height / 2, 18, 24, 2, ResourceManager.get("trainer")),
    dialogs: [],
    backpackOpened: false
};
LevelManager.initLevels();
let level = LevelManager.actualLevel;
let walls = [], items = [], grass = [];
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
                    items.push(new Item(j * 32, i * 32, 32, 32, ItemManager.getItem(level[i][j]), ResourceManager.get('pokeball')));
                    break;
            }
        }
    }
}

//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for (let i = 0; i < walls.length; i++) {
        if (walls[i].checkCollisionWithPlayer(state.player)) {
            state.player.dx = 0;
            state.player.dy = 0;
            state.player.playerAnimation.stopAnimation();
        }
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i].checkCollisionWithPlayer(state.player)) {
            if (state.player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                let dialogX = state.player.posX - canvas.width / 8 + state.player.w / 2;
                let dialogY = state.player.posY + canvas.height / 2 - 200;
                let dialogHeight = 50;
                let dialogWidth = canvas.width / 4;
                state.dialogs.push(new Dialog(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + items[i].itemInfo.name));
                state.dialogs.push(new Dialog(dialogX, dialogY, dialogWidth, dialogHeight,
                    items[i].itemInfo.name + " is " + items[i].itemInfo.desc));
                state.player.backpack.addToBackpack(items[i].itemInfo.name);
                items.splice(i, 1); //remove from map
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
    for (let i = 0; i < items.length; i++) {
        items[i].draw(ctx);
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
