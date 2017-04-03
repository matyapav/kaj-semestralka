/**
 * Created by Pavel on 03.04.2017.
 */
//TODO udelat jednoho spolecneho predka pro vsechno co se vykresluje (neco jako drawable)
export default class Item {
    _posX;
    _posY;
    _w;
    _h;
    _itemInfo;

    constructor(posX, posY, w, h, itemInfo) {
        this._posX = posX;
        this._posY = posY;
        this._w = w;
        this._h = h;
        this._itemInfo = itemInfo;
    }

    get posX() {
        return this._posX;
    }

    set posX(value) {
        this._posX = value;
    }

    get posY() {
        return this._posY;
    }

    set posY(value) {
        this._posY = value;
    }

    get w() {
        return this._w;
    }

    get h() {
        return this._h;
    }

    get itemInfo() {
        return this._itemInfo;
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

    draw(ctx){
        ctx.beginPath();
        let img = new Image();
        img.src = 'img/pokeball.png';
        ctx.drawImage(img,this._posX,this._posY);
        ctx.fill();
        ctx.closePath();
    }
}