/**
 * Created by Pavel on 03.04.2017.
 */
export default class Tile {
    _posX;
    _posY;
    _w;
    _h;
    _image;

    constructor(posX, posY, w, h, imgSrc) {
        this._posX = posX;
        this._posY = posY;
        this._w = w;
        this._h = h;
        this._image = new Image();
        this._image.src = imgSrc;
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

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this._image,this._posX,this._posY);
        ctx.fill();
        ctx.closePath();
    }

}