/**
 * Created by Pavel on 03.04.2017.
 */
export default class Animation {

    _sprite;
    _frames;
    _actualFrame;
    _speed;
    _timer;
    _isRunning;

    _fromToX;
    _frameSize;
    _fromToY;

    constructor(sprite, frames, speed, startFrom, fromToX, fromToY, frameSize) {
        this._sprite = sprite;
        this._frames = frames;
        this._actualFrame = startFrom;
        this._speed = speed;
        this._isRunning = false;
        this._fromToY = fromToY;
        this._fromToX = fromToX;
        this._frameSize = frameSize;

    }

    runAnimation() {
        //console.log(this._isRunning);
        if (!this._isRunning) {
            this._timer = setInterval(function () {
                this._actualFrame++;
                if (this._actualFrame >= this._frames) {
                    this._actualFrame = 0; //start again
                }
                //console.log(this._actualFrame);
            }.bind(this), this._speed);
            this._isRunning = true;
        }
    }

    stopAnimation() {
        if (this._isRunning) {
            this._actualFrame = 0;
            clearInterval(this._timer);
            this._isRunning = false;
        }
    }

    drawActualFrame(ctx, posX, posY) {
        ctx.drawImage(this._sprite, this._actualFrame * this._fromToX[0], this._fromToY[0], this._fromToX[1],
            this._fromToY[1], posX, posY,
            this._frameSize[0], this._frameSize[1]);
    }

    get actualFrame() {
        return this._actualFrame;
    }
}