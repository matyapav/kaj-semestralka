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

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//TODO vytvorit soubor LevelManager nebo tak neco


LevelManager.initLevels();
let dialogs = [];
let player = new Player(canvas.width/2,canvas.height/2,18,24,2, ResourceManager.get("trainer"));
//TODO udelat soubor worldBuilder nebo neco takoveho
//init world
let level = LevelManager.actualLevel;
let walls = [], items = [], grass = [];
for(let i=0;i<level.length;i++){
    for(let j=0;j<level[i].length;j++){
        switch (level[i][j]){
            case 0:
                grass.push(new Drawable(j*32, i*32, 32, 32, ResourceManager.get('grass')));
                break;
            case 1:
                walls.push(new InteractiveTile(j*32, i*32, 32, 32, ResourceManager.get('wall')));
                break;
            case 2:
            case 3:
            case 4:
                grass.push(new Drawable(j*32, i*32, 32, 32, ResourceManager.get('grass')));
                items.push(new Item(j*32, i*32, 32, 32, ItemManager.getItem(level[i][j]), ResourceManager.get('pokeball')));
                break;
        }
    }
}
//keyboard input
let controls = new Controls(player, dialogs);
controls.init();


//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for(let i=0; i<walls.length; i++){
        if(walls[i].checkCollisionWithPlayer(player)){
            player.dx = 0;
            player.dy = 0;
            player.playerAnimation.stopAnimation();
        }
    }
    for(let i=0; i<items.length; i++){
        if(items[i].checkCollisionWithPlayer(player)){
            if(player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                let dialogX = player.posX - canvas.width/8 + player.w/2;
                let dialogY = player.posY + canvas.height/2 - 200;
                let dialogHeight = 50;
                let dialogWidth = canvas.width/4;
                dialogs.push(new Dialog(dialogX,dialogY, dialogWidth, dialogHeight, "You've found "+items[i].itemInfo.name));
                dialogs.push(new Dialog(dialogX,dialogY, dialogWidth, dialogHeight,
                    items[i].itemInfo.name+" is "+items[i].itemInfo.desc));
                player.backpack.addToBackpack(items[i].itemInfo.name);
                items.splice(i, 1); //remove from map
            }
        }
    }
}

//game updates////////
function update(){
    checkCollisions();
    player.update();
    draw();
}
//draw
function draw() {
    clearCanvas();
    ctx.save();
    ctx.translate(-player.posX+ canvas.width/2/2 - player.w, -player.posY + canvas.height/2/2 - player.h);

    for(let i=0; i<walls.length; i++){
        walls[i].draw(ctx);
    }
    for(let i=0; i<grass.length; i++){
        grass[i].draw(ctx);
    }
    for(let i=0; i<items.length; i++){
        items[i].draw(ctx);
    }

    player.draw(ctx);
    if(dialogs.length != 0){
        dialogs[0].drawDialogText(ctx);
    }
    ctx.restore()
}

function clearCanvas() {
    ctx.fillStyle='#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(update, 1000/60);

///animation test
