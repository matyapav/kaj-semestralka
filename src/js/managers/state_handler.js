/**
 * Created by Pavel on 11.04.2017.
 */
import Controls from './controls.js'
import ResourceManager from './resource_manager.js';

import Item from '../drawables/item.js';
import Dialog from '../drawables/dialog.js'
export default class StateHandler {

    //init game stuff

    player;
    dialogs;
    backpackOpened;
    controls;
    lastConstrols;
    items;
    walls;
    keyState;
    moveTimer;

    constructor(){
        this.dialogs = [];
        this.backpackOpened = false;
        this.controls = Controls.MOVING;
        this.lastConstrols = Controls.MOVING;
        this.items = [];
        this.walls = [];
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

}