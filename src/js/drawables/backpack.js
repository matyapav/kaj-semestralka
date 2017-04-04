/**
 * Created by Pavel on 03.04.2017.
 */
import Drawable from './drawable.js'
export default class Backpack extends Drawable{

    _backpack_items;

    constructor(){
        super();
        this._backpack_items = [];
    }

    addToBackpack(item){
        for(let i = 0; i < this._backpack_items.length; i++) {
            if(this._backpack_items[i].name == item){
                this._backpack_items[i]["quantity"] =  this._backpack_items[i]["quantity"] + 1;
                return;
            }
        }
        this._backpack_items.push({name: item, quantity: 1});
    }

    removeFromBackpack(item){
        for(let i = 0; i < this._backpack_items.length; i++){
            if(this._backpack_items[i] == item){
                this._backpack_items.splice(i,1);
            }
        }
    }

    getBackpackItems(){
        return this._backpack_items;
    }

    setPosition(x,y,w,h){
        this.setPosX(x);
        this.setPosY(y);
        this.setWidth(w);
        this.setHeight(h);
    }

    draw(ctx) {
        //backpack rect
        ctx.strokeStyle="black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 2;
        ctx.fillRect(this.posX , this.posY, this.w, this.h);
        ctx.strokeRect(this.posX , this.posY, this.w, this.h);

        //backpack heading
        ctx.textBaseline = "middle";
        ctx.font = "12px Impact";
        ctx.fillStyle = "black";
        let backpackHeading = "Backpack"
        let textX = this.posX + this.w/2 - ctx.measureText(backpackHeading).width/2;
        let textY = this.posY + 15;
        //line under heading
        ctx.fillStyle = "black";
        ctx.fillText(backpackHeading, textX, textY);
        ctx.moveTo(this.posX, textY+15);
        ctx.lineTo(this.posX + this.w, textY+15);
        ctx.stroke();


        ctx.textBaseline = "middle";
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        let paddingTop = 15;
        let lineHeight = 15;
        for(let i = 0; i < this._backpack_items.length; i++){
            let itemText = this._backpack_items[i].quantity +"x "+ this._backpack_items[i].name;
            textX = this.posX + this.w/2 - ctx.measureText(itemText).width/2;
            textY = this.posY + 10 + (i+1)*lineHeight+paddingTop;
            ctx.fillText(itemText, textX, textY);

        }

    }
}