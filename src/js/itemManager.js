/**
 * Created by Pavel on 03.04.2017.
 */
export default class ItemManager{
    _items;

    constructor(){
        this._items = {
            2: {name: 'Pokeball', desc: 'standard ball to catch pokemons.'},
            3: {name: 'GreatBall', desc: 'slightly better ball to catch stronger pokemons'},
            4: {name: 'UltraBall', desc: 'strong ball to catch really strong pokemons'}
        };
    }


    get items() {
        return this._items;
    }

    getItem(id){
        return this._items[id];
    }
}
