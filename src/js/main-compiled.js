'use strict';

var _player = require('./player.js');

var _player2 = _interopRequireDefault(_player);

var _wall = require('./wall.js');

var _wall2 = _interopRequireDefault(_wall);

var _controls = require('./controls.js');

var _controls2 = _interopRequireDefault(_controls);

var _item = require('./item.js');

var _item2 = _interopRequireDefault(_item);

var _itemManager = require('./itemManager.js');

var _itemManager2 = _interopRequireDefault(_itemManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById("myCanvas"); /**
                                                   * Created by Pavel on 01.04.2017.
                                                   */

var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//TODO vytvorit soubor LevelManager nebo tak neco
var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var im = new _itemManager2.default();
var dialogs = [];
var player = new _player2.default(canvas.width / 2, canvas.height / 2, 24, 24, 2);
var controls = new _controls2.default(player, dialogs);
controls.init();
//keyboard input


//TODO udelat soubor worldBuilder nebo neco takoveho
//init world
var walls = [];
var items = [];
for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {
        switch (level[i][j]) {
            case 1:
                walls.push(new _wall2.default(j * 32, i * 32, 32, 32));
                break;
            case 2:
            case 3:
            case 4:
                items.push(new _item2.default(j * 32, i * 32, 32, 32, im.getItem(level[i][j])));
                break;
        }
    }
}

function update() {
    //TODO taky mozna mit nejaky collision checker
    for (var _i = 0; _i < walls.length; _i++) {
        if (walls[_i].checkCollisionWithPlayer(player)) {
            player.dx = 0;
            player.dy = 0;
        }
    }
    for (var _i2 = 0; _i2 < items.length; _i2++) {
        if (items[_i2].checkCollisionWithPlayer(player)) {
            if (player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                dialogs.push("You've found " + items[_i2].itemInfo.name);
                dialogs.push(items[_i2].itemInfo.name + " is " + items[_i2].itemInfo.desc);
                player.addToScore(1);
                items.splice(_i2, 1);
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
    ctx.translate(-player.posX + canvas.width / 2 / 2 - player.w, -player.posY + canvas.height / 2 / 2 - player.h);

    for (var _i3 = 0; _i3 < walls.length; _i3++) {
        walls[_i3].draw(ctx);
    }
    for (var _i4 = 0; _i4 < items.length; _i4++) {
        items[_i4].draw(ctx);
    }

    player.draw(ctx);
    if (dialogs.length != 0) {
        drawDialogText(dialogs[0]);
    }
    ctx.restore();
}

function drawDialogText(text) {
    var dialogX = player.posX - canvas.width / 8 + player.w / 2;
    var dialogY = player.posY + canvas.height / 2 - 200;
    var dialogHeight = 50;
    var dialogWidth = canvas.width / 4;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 2;
    ctx.fillRect(dialogX, dialogY, dialogWidth, dialogHeight);
    ctx.strokeRect(dialogX, dialogY, dialogWidth, dialogHeight);

    ctx.textBaseline = "middle";
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";

    var textX = dialogX + dialogWidth / 2 - ctx.measureText(text).width / 2;
    var textY = dialogY + dialogHeight / 2 - 5;
    ctx.fillText(text, textX, textY);

    ctx.textBaseline = "middle";
    ctx.font = "8px Arial";
    ctx.fillStyle = "red";
    var continueText = "Press Enter to continue";
    textX = dialogX + dialogWidth / 2 - ctx.measureText(continueText).width / 2;
    textY = dialogY + dialogHeight / 2 + 15;
    ctx.fillText(continueText, textX, textY);
}
function clearCanvas() {
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
}

setInterval(update, 10);

//# sourceMappingURL=main-compiled.js.map