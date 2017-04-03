/**
 * Created by Pavel on 03.04.2017.
 */
//TODO udelat jednoho spolecneho predka pro vsechno co se vykresluje (neco jako drawable)
import InteractiveTile from './interactive_tile.js'

export default class Item extends InteractiveTile{

    _itemInfo;

    constructor(posX, posY, w, h, itemInfo, imgSrc) {
        super(posX, posY, w, h, imgSrc);
        this._itemInfo = itemInfo;
    }

    get itemInfo() {
        return this._itemInfo;
    }
}