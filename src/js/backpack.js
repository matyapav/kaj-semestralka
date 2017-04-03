/**
 * Created by Pavel on 03.04.2017.
 */

export default class Backpack {

    _backpack_items;

    constructor(){
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
}