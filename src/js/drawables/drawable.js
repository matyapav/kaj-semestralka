/**
 * Created by Pavel on 03.04.2017.
 */
export default class Drawable {
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

    setPosX(value) {
        this._posX = value;
    }

    get posY() {
        return this._posY;
    }

    setPosY(value) {
        this._posY = value;
    }

    get w() {
        return this._w;
    }

    setWidth(value) {
        this._w = value;
    }

    get h() {
        return this._h;
    }

    setHeight(value) {
        this._h = value;
    }

    get image() {
        return this._image;
    }

    draw(ctx){
        ctx.drawImage(this._image,this._posX,this._posY);
    }

}