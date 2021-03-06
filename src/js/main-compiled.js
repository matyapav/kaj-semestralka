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

//init canvas
var canvas = document.getElementById("myCanvas"); /**
                                                   * Created by Pavel on 01.04.2017.
                                                   */

var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

//init game stuff
var state = {
    player: new _player2.default(canvas.width / 2, canvas.height / 2, 18, 24, 2, _resource_manager2.default.get("trainer")),
    dialogs: [],
    backpackOpened: false
};
_level_manager2.default.initLevels();
var level = _level_manager2.default.actualLevel;
var walls = [],
    items = [],
    grass = [];
var controls = new _controls2.default(state);
controls.init();
initLevel();

/////////////////////////////////////////
function initLevel() {
    for (var i = 0; i < level.length; i++) {
        for (var j = 0; j < level[i].length; j++) {
            switch (level[i][j]) {
                case -1:
                    state.player = new _player2.default(j * 32, i * 32);
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
}

//TODO vymyslet co s timto - presunout nepresunout?
function checkCollisions() {
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].checkCollisionWithPlayer(state.player)) {
            state.player.dx = 0;
            state.player.dy = 0;
            state.player.playerAnimation.stopAnimation();
        }
    }
    for (var _i = 0; _i < items.length; _i++) {
        if (items[_i].checkCollisionWithPlayer(state.player)) {
            if (state.player.isDoingPrimaryAction()) {
                controls.switchToDialogControls();
                var dialogX = state.player.posX - canvas.width / 8 + state.player.w / 2;
                var dialogY = state.player.posY + canvas.height / 2 - 200;
                var dialogHeight = 50;
                var dialogWidth = canvas.width / 4;
                state.dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + items[_i].itemInfo.name));
                state.dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, items[_i].itemInfo.name + " is " + items[_i].itemInfo.desc));
                state.player.backpack.addToBackpack(items[_i].itemInfo.name);
                items.splice(_i, 1); //remove from map
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

    for (var i = 0; i < walls.length; i++) {
        walls[i].draw(ctx);
    }
    for (var _i2 = 0; _i2 < grass.length; _i2++) {
        grass[_i2].draw(ctx);
    }
    for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].draw(ctx);
    }

    state.player.draw(ctx);
    if (state.dialogs.length != 0) {
        state.dialogs[0].draw(ctx);
    }

    if (state.backpackOpened) {
        var bpX = state.player.posX + canvas.width / 8 + state.player.w / 2;
        var bpY = state.player.posY - canvas.height / 8 - 50;
        var bpHeight = canvas.height / 2 - 15;
        var bpWidth = 160;
        state.player.backpack.setPosition(bpX, bpY, bpWidth, bpHeight);
        state.player.backpack.draw(ctx);
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