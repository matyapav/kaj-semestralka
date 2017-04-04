/**
 * Created by Pavel on 04.04.2017.
 */
import Drawable from './drawable.js'
export default class Dialog extends Drawable{

    _text;

    constructor(x, y, width, height, text){
        super(x,y,width,height);
        this._text = text;
    }

    draw(ctx) {

        //draw dialog rect
        ctx.strokeStyle="black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 2;
        ctx.fillRect(this.posX , this.posY, this.w, this.h);
        ctx.strokeRect(this.posX , this.posY, this.w, this.h);

        //dialog text setup
        ctx.textBaseline = "middle";
        ctx.font = "12px Arial";
        ctx.fillStyle = "black";

        //draw text into rect
        let textX = this.posX + this.w/2 - ctx.measureText(this._text).width/2;
        let textY = this.posY + this.h/2 - 5;
        ctx.fillText(this._text, textX, textY);

        //setup and draw "enter to continue" text to the bottom
        ctx.textBaseline = "middle";
        ctx.font = "8px Arial";
        ctx.fillStyle = "red";
        let continueText = "Press Enter to continue";
        textX = this.posX + this.w/2 - ctx.measureText(continueText).width/2;
        textY = this.posY + this.h/2 + 15;
        ctx.fillText(continueText, textX, textY);

    }
}