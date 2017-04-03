/**
 * Created by Pavel on 01.04.2017.
 */
import Player from './player.js';
import Tile from './tile.js'
import InteractiveTile from './interactive_tile.js'
import Controls from './controls.js'
import Item from './item.js'
import ItemManager from './itemManager.js'

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//TODO vytvorit soubor LevelManager nebo tak neco
let level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let im = new ItemManager();
let dialogs = [];
let player = new Player(canvas.width/2,canvas.height/2,24,24,3);
let controls = new Controls(player, dialogs);
controls.init();
//keyboard input


//TODO udelat soubor worldBuilder nebo neco takoveho
//init world
let walls = [], items = [], grass = [];
for(let i=0;i<level.length;i++){
    for(let j=0;j<level[i].length;j++){
        switch (level[i][j]){
            case 0:
                grass.push(new Tile(j*32, i*32, 32, 32, '/img/grass.png'));
                break;
            case 1:
                walls.push(new InteractiveTile(j*32, i*32, 32, 32, '/img/wall.png'));
                break;
            case 2:
            case 3:
            case 4:
                grass.push(new Tile(j*32, i*32, 32, 32, '/img/grass.png'));
                items.push(new Item(j*32, i*32, 32, 32, im.getItem(level[i][j]), '/img/pokeball.png'));
                break;
        }
    }
}

function update(){
    //TODO taky mozna mit nejaky collision checker
    for(let i=0; i<walls.length; i++){
        if(walls[i].checkCollisionWithPlayer(player)){
            player.dx = 0;
            player.dy = 0;
        }
    }
    for(let i=0; i<items.length; i++){
        if(items[i].checkCollisionWithPlayer(player)){
            if(player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                dialogs.push("You've found "+items[i].itemInfo.name) ;
                dialogs.push(items[i].itemInfo.name+" is "+items[i].itemInfo.desc) ;
                player.backpack.addToBackpack(items[i].itemInfo.name);
                items.splice(i, 1); //remove from map
            }
        }
    }
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
        drawDialogText(dialogs[0]);
    }
    ctx.restore()
}

function drawDialogText(text) {
    let dialogX = player.posX - canvas.width/8 + player.w/2;
    let dialogY = player.posY + canvas.height/2 - 200;
    let dialogHeight = 50;
    let dialogWidth = canvas.width/4;
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 2;
    ctx.fillRect(dialogX , dialogY, dialogWidth, dialogHeight);
    ctx.strokeRect(dialogX , dialogY, dialogWidth, dialogHeight);

    ctx.textBaseline = "middle";
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";

    let textX = dialogX + dialogWidth/2 - ctx.measureText(text).width/2;
    let textY = dialogY + dialogHeight/2 - 5;
    ctx.fillText(text, textX, textY);

    ctx.textBaseline = "middle";
    ctx.font = "8px Arial";
    ctx.fillStyle = "red";
    let continueText = "Press Enter to continue";
    textX = dialogX + dialogWidth/2 - ctx.measureText(continueText).width/2;
    textY = dialogY + dialogHeight/2 + 15;
    ctx.fillText(continueText, textX, textY);

}
function clearCanvas() {
    ctx.fillStyle='#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(update, 1000/60);