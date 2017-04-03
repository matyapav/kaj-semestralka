/**
 * Created by Pavel on 03.04.2017.
 */
export default class ItemManager{

    static _items = {
        2: {name: 'Pokeball', desc: 'standard ball to catch pokemons.'},
        3: {name: 'GreatBall', desc: 'slightly better ball to catch stronger pokemons'},
        4: {name: 'UltraBall', desc: 'strong ball to catch really strong pokemons'}
    };

    static get items() {
        return this._items;
    }

    static getItem(id){
        return this._items[id];
    }
}
