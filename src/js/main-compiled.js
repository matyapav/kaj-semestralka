'use strict';

var _player = require('./drawables/player.js');

var _player2 = _interopRequireDefault(_player);

var _drawable = require('./drawables/drawable.js');

var _drawable2 = _interopRequireDefault(_drawable);

var _interactive_tile = require('./drawables/interactive_tile.js');

var _interactive_tile2 = _interopRequireDefault(_interactive_tile);

var _controls = require('./managers/controls.js');

var _controls2 = _interopRequireDefault(_controls);

var _item = require('./drawables/item.js');

var _item2 = _interopRequireDefault(_item);

var _item_manager = require('./managers/item_manager.js');

var _item_manager2 = _interopRequireDefault(_item_manager);

var _level_manager = require('./managers/level_manager.js');

var _level_manager2 = _interopRequireDefault(_level_manager);

var _dialog = require('./drawables/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

var _resource_manager = require('./managers/resource_manager.js');

var _resource_manager2 = _interopRequireDefault(_resource_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById("myCanvas"); /**
                                                   * Created by Pavel on 01.04.2017.
                                                   */

var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//TODO vytvorit soubor LevelManager nebo tak neco


_level_manager2.default.initLevels();
var dialogs = [];
var player = new _player2.default(canvas.width / 2, canvas.height / 2, 18, 24, 2, _resource_manager2.default.get("trainer"));
//TODO udelat soubor worldBuilder nebo neco takoveho
//init world
var level = _level_manager2.default.actualLevel;
var walls = [],
    items = [],
    grass = [];
for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {
        switch (level[i][j]) {
            case 0:
                grass.push(new _drawable2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('grass')));
                break;
            case 1:
                walls.push(new _interactive_tile2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('wall')));
                break;
            case 2:
            case 3:
            case 4:
                grass.push(new _drawable2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('grass')));
                items.push(new _item2.default(j * 32, i * 32, 32, 32, _item_manager2.default.getItem(level[i][j]), _resource_manager2.default.get('pokeball')));
                break;
        }
    }
}
//keyboard input
var controls = new _controls2.default(player, dialogs);
controls.init();

//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for (var _i = 0; _i < walls.length; _i++) {
        if (walls[_i].checkCollisionWithPlayer(player)) {
            player.dx = 0;
            player.dy = 0;
            player._animation.stopAnimation();
        }
    }
    for (var _i2 = 0; _i2 < items.length; _i2++) {
        if (items[_i2].checkCollisionWithPlayer(player)) {
            if (player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                var dialogX = player.posX - canvas.width / 8 + player.w / 2;
                var dialogY = player.posY + canvas.height / 2 - 200;
                var dialogHeight = 50;
                var dialogWidth = canvas.width / 4;
                dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + items[_i2].itemInfo.name));
                dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, items[_i2].itemInfo.name + " is " + items[_i2].itemInfo.desc));
                player.backpack.addToBackpack(items[_i2].itemInfo.name);
                items.splice(_i2, 1); //remove from map
            }
        }
    }
}

//game updates////////
function update() {
    checkCollisions();
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
    for (var _i4 = 0; _i4 < grass.length; _i4++) {
        grass[_i4].draw(ctx);
    }
    for (var _i5 = 0; _i5 < items.length; _i5++) {
        items[_i5].draw(ctx);
    }

    player.draw(ctx);
    if (dialogs.length != 0) {
        dialogs[0].drawDialogText(ctx);
    }
    ctx.restore();
}

function clearCanvas() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(update, 1000 / 60);

///animation test

//# sourceMappingURL=main-compiled.js.map