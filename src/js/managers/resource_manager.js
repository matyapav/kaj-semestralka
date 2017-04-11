/**
 * Created by Pavel on 04.04.2017.
 */

export default class ResourceManager{


    static _resources = {
        "trainer": '../img/trainer.png',
        "grass" : '../img/grass.png',
        "pokeball": '../img/pokeball.png',
        "wall" : '../img/wall.png'
    };

    static get resources() {
        return this._items;
    }

    static get(name) {
        return this._resources[name];
    }
}