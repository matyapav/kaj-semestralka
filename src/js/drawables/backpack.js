/**
 * Created by Pavel on 03.04.2017.
 */
import Drawable from './drawable.js'

export default class Backpack extends Drawable{

    _backpack_items;
    _selectedIndex;
    _showItemActions;

    _itemActions;
    _itemActionsSelectedIndex;

    constructor(){
        super();
        this._backpack_items = [];
        this._selectedIndex = 0;
        this._showItemActions = false;
        this._itemActions = ['Use','Info','Drop'];
    }

    resetBackpackStatusToDefault(){
        this._selectedIndex = 0;
        this._showItemActions = false;
    }

    addToBackpack(item){
        for(let i = 0; i < this._backpack_items.length; i++) {
            if(this._backpack_items[i].name == item.name){
                this._backpack_items[i].quantity =  this._backpack_items[i].quantity + 1;
                return;
            }
        }
        item.quantity = 1;
        this._backpack_items.push(item);
    }

    removeFromBackpack(item){
        for(let i = 0; i < this._backpack_items.length; i++){
            if(this._backpack_items[i] == item){
                this._backpack_items.splice(i,1);
            }
        }
    }

    decreaseQuantityOfItemOnIndex(index){
        let item = this._backpack_items[index];
        item.quantity--;
        if(item.quantity == 0){
            //remove item from backpack
            this._backpack_items.splice(index, 1);
            this.decrementSelected();
        }else{
            this._backpack_items[index] = item;
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

    incrementSelected(){
        if(this._selectedIndex == this._backpack_items.length - 1){
            this._selectedIndex = 0;
        }else{
            this._selectedIndex++;
        }
    }

    decrementSelected(){
        if(this._selectedIndex == 0) {
            this._selectedIndex = this._backpack_items.length - 1;
        }else{
            this._selectedIndex--;
        }
    }

    incrementActionsSelected(){
        if(this._itemActionsSelectedIndex == this._itemActions.length - 1){
            this._itemActionsSelectedIndex = 0;
        }else{
            this._itemActionsSelectedIndex++;
        }
    }

    decrementActionsSelected(){
        if(this._itemActionsSelectedIndex == 0) {
            this._itemActionsSelectedIndex = this._itemActions.length - 1;
        }else{
            this._itemActionsSelectedIndex--;
        }
    }


    toggleItemActions(){
        this._showItemActions = !this._showItemActions;
        this._itemActionsSelectedIndex = 0;
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


        //setup for items

        let paddingTop = 15;
        let lineHeight = 15;

        if(this._backpack_items.length == 0){
            ctx.fillStyle = "black";
            ctx.font = "10px Arial";
            ctx.textBaseline = "middle";
            let emptyText = "Your bag is empty";
            textX = this.posX + this.w/2 - ctx.measureText(emptyText).width/2;
            textY = this.posY + 10 + lineHeight+paddingTop;
            ctx.fillText(emptyText, textX, textY);
        }
        //draw items
        for(let i = 0; i < this._backpack_items.length; i++){
            ctx.textBaseline = "middle";
            ctx.font = "10px Arial";
            let itemText = this._backpack_items[i].quantity +"x "+ this._backpack_items[i].name;
            textX = this.posX + this.w/2 - ctx.measureText(itemText).width/2;
            textY = this.posY + 10 + (i+1)*lineHeight+paddingTop;
            if(i == this._selectedIndex){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "black";
            }
            ctx.fillText(itemText, textX, textY);
            if(this._showItemActions && i == this._selectedIndex){
                this.drawItemActions(ctx, textX - 110, textY);
            }
        }

    }

    drawItemActions(ctx, posX, posY){
        //backpack rect
        let actionsBarWidth = 100;
        let actionsBarHeight = 50;
        ctx.strokeStyle="black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 2;
        ctx.fillRect(posX, posY, actionsBarWidth, actionsBarHeight);
        ctx.strokeRect(posX, posY, actionsBarWidth, actionsBarHeight);
        //draw items
        let lineHeight = 15;

        ctx.textBaseline = "middle";
        ctx.font = "12px Arial";

        for(let i = 0; i < this._itemActions.length; i++){
            let itemText = this._itemActions[i];
            let textX = posX + actionsBarWidth/2 - ctx.measureText(itemText).width/2;
            let textY = posY + 10 + i*lineHeight;
            if(i == this._itemActionsSelectedIndex){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "black";
            }
            ctx.fillText(itemText, textX, textY);

        }
    }
}