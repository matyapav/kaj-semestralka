/**
 * Created by Pavel on 03.04.2017.
 */
//TODO spolecny predek pro vsechny veci co se nebudou hybat
export default class Wall {
    _posX;
    _posY;
    _w;
    _h;

    constructor(posX, posY, w, h) {
        this._posX = posX;
        this._posY = posY;
        this._w = w;
        this._h = h;
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
        ctx.rect(this._posX, this._posY, this._w, this._h);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
    }
}