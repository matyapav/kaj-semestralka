/**
 * Created by Pavel on 11.04.2017.
 */
import Controls from './controls.js'
import ResourceManager from './resource_manager.js';
import ItemManager from './item_manager.js';
import LevelManager from './level_manager.js';
import {TILE_SIZE} from '../utils/constants.js';
import Player from '../drawables/player.js';
import Drawable from '../drawables/drawable.js';
import Item from '../drawables/item.js';
import Dialog from '../drawables/dialog.js'
export default class thisHandler {

    //init game stuff

    player;
    dialogs;
    backpackOpened;
    controls;
    lastConstrols;
    items;
    walls;
    grass;
    keyState;  //array for pressed keys (in case of event handlers are just not enough)
    moveTimer; //timer for transition between tiles

    constructor(){
        this.dialogs = [];
        this.backpackOpened = false;
        this.controls = Controls.MOVING;
        this.lastConstrols = Controls.MOVING;
        this.items = [];
        this.walls = [];
        this.grass = [];
        this.keyState = {};
        this.moveTimer = null;
    }

    setPlayer(player){
        this.player = player;
    }

    createDialog(posX, posY, w, h, text){
        this.dialogs.push(new Dialog(posX, posY, w, h, text));
    }

    createItem(posX, posY, w, h, itemInfo){
        this.items.push(new Item(posX, posY, w, h, itemInfo, ResourceManager.get(itemInfo.image)));
    }

    initActualLevel() {
        let level = LevelManager.actualLevel;
        for (let i = 0; i < level.length; i++) {
            for (let j = 0; j < level[i].length; j++) {
                switch (level[i][j]) {
                    case -1:
                        this.player = new Player(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get("trainer"), this);
                    case 0:
                        this.grass.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('grass')));
                        break;
                    case 1:
                        this.walls.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('wall')));
                        break;
                    case 2:
                    case 3:
                    case 4:
                        this.grass.push(new Drawable(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, ResourceManager.get('grass')));
                        let itemInfo = ItemManager.getItem(level[i][j]);
                        this.createItem(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, itemInfo);
                        break;
                }
            }
        }
    }

}