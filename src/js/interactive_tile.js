/**
 * Created by Pavel on 03.04.2017.
 */
/**
 * Created by Pavel on 03.04.2017.
 */
//TODO udelat jednoho spolecneho predka pro vsechno co se vykresluje (neco jako drawable)
import Tile from './tile.js'

export default class InteractiveTile extends Tile{

    constructor(posX, posY, w, h, imgSrc) {
        super(posX, posY, w, h, imgSrc);
    }

    checkCollisionWithPlayer(player){
        //console.log(player.posX+" "+player.posY+" | "+this._posX+ " "+this._posY);
        return  ((
            (player.posX + player.dx >= this._posX && player.posX + player.dx <= this._posX+this._w) ||
            (player.posX + player.dx + player.w <= this._posX + this._w && player.posX + + player.dx + player.w >= this._posX)
        ) &&
        (
            (player.posY + player.dy >= this._posY && player.posY + player.dy <= this._posY+this._h) ||
            (player.posY + player.dy + player.h <= this._posY + this._h && player.posY + player.dy + player.h >= this._posY)
        ))

    }
}