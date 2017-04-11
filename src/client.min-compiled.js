'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
            /******/return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 10);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 03.04.2017.
     */
    var Drawable = function () {
        function Drawable(posX, posY, w, h, imgSrc) {
            _classCallCheck(this, Drawable);

            this._posX = posX;
            this._posY = posY;
            this._w = w;
            this._h = h;
            this._image = new Image();
            this._image.src = imgSrc;
        }

        _createClass(Drawable, [{
            key: "setPosX",
            value: function setPosX(value) {
                this._posX = value;
            }
        }, {
            key: "setPosY",
            value: function setPosY(value) {
                this._posY = value;
            }
        }, {
            key: "setWidth",
            value: function setWidth(value) {
                this._w = value;
            }
        }, {
            key: "setHeight",
            value: function setHeight(value) {
                this._h = value;
            }
        }, {
            key: "draw",
            value: function draw(ctx) {
                ctx.drawImage(this._image, this._posX, this._posY);
            }
        }, {
            key: "posX",
            get: function get() {
                return this._posX;
            }
        }, {
            key: "posY",
            get: function get() {
                return this._posY;
            }
        }, {
            key: "w",
            get: function get() {
                return this._w;
            }
        }, {
            key: "h",
            get: function get() {
                return this._h;
            }
        }, {
            key: "image",
            get: function get() {
                return this._image;
            }
        }]);

        return Drawable;
    }();

    exports.default = Drawable;

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _drawable = __webpack_require__(0);

    var _drawable2 = _interopRequireDefault(_drawable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } /**
       * Created by Pavel on 03.04.2017.
       */
    /**
     * Created by Pavel on 03.04.2017.
     */
    //TODO udelat jednoho spolecneho predka pro vsechno co se vykresluje (neco jako drawable)


    var InteractiveTile = function (_Drawable) {
        _inherits(InteractiveTile, _Drawable);

        function InteractiveTile(posX, posY, w, h, imgSrc) {
            _classCallCheck(this, InteractiveTile);

            return _possibleConstructorReturn(this, (InteractiveTile.__proto__ || Object.getPrototypeOf(InteractiveTile)).call(this, posX, posY, w, h, imgSrc));
        }

        _createClass(InteractiveTile, [{
            key: 'checkCollisionWithPlayer',
            value: function checkCollisionWithPlayer(player) {
                //console.log(player.posX+" "+player.posY+" | "+this._posX+ " "+this._posY);
                return (player.posX + player.dx >= this._posX && player.posX + player.dx <= this._posX + this._w || player.posX + player.dx + player.w <= this._posX + this._w && player.posX + +player.dx + player.w >= this._posX) && (player.posY + player.dy >= this._posY && player.posY + player.dy <= this._posY + this._h || player.posY + player.dy + player.h <= this._posY + this._h && player.posY + player.dy + player.h >= this._posY);
            }
        }]);

        return InteractiveTile;
    }(_drawable2.default);

    exports.default = InteractiveTile;

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _drawable = __webpack_require__(0);

    var _drawable2 = _interopRequireDefault(_drawable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } /**
       * Created by Pavel on 04.04.2017.
       */

    var Dialog = function (_Drawable) {
        _inherits(Dialog, _Drawable);

        function Dialog(x, y, width, height, text) {
            _classCallCheck(this, Dialog);

            var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, x, y, width, height));

            _this._text = text;
            return _this;
        }

        _createClass(Dialog, [{
            key: "draw",
            value: function draw(ctx) {

                //draw dialog rect
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 2;
                ctx.fillRect(this.posX, this.posY, this.w, this.h);
                ctx.strokeRect(this.posX, this.posY, this.w, this.h);

                //dialog text setup
                ctx.textBaseline = "middle";
                ctx.font = "12px Arial";
                ctx.fillStyle = "black";

                //draw text into rect
                var textX = this.posX + this.w / 2 - ctx.measureText(this._text).width / 2;
                var textY = this.posY + this.h / 2 - 5;
                ctx.fillText(this._text, textX, textY);

                //setup and draw "enter to continue" text to the bottom
                ctx.textBaseline = "middle";
                ctx.font = "8px Arial";
                ctx.fillStyle = "red";
                var continueText = "Press Enter to continue";
                textX = this.posX + this.w / 2 - ctx.measureText(continueText).width / 2;
                textY = this.posY + this.h / 2 + 15;
                ctx.fillText(continueText, textX, textY);
            }
        }]);

        return Dialog;
    }(_drawable2.default);

    exports.default = Dialog;

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _interactive_tile = __webpack_require__(1);

    var _interactive_tile2 = _interopRequireDefault(_interactive_tile);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } /**
       * Created by Pavel on 03.04.2017.
       */
    //TODO udelat jednoho spolecneho predka pro vsechno co se vykresluje (neco jako drawable)


    var Item = function (_InteractiveTile) {
        _inherits(Item, _InteractiveTile);

        function Item(posX, posY, w, h, itemInfo, imgSrc) {
            _classCallCheck(this, Item);

            var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, posX, posY, w, h, imgSrc));

            _this._itemInfo = itemInfo;
            return _this;
        }

        _createClass(Item, [{
            key: 'itemInfo',
            get: function get() {
                return this._itemInfo;
            }
        }]);

        return Item;
    }(_interactive_tile2.default);

    exports.default = Item;

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _backpack = __webpack_require__(9);

    var _backpack2 = _interopRequireDefault(_backpack);

    var _animation = __webpack_require__(11);

    var _animation2 = _interopRequireDefault(_animation);

    var _drawable = __webpack_require__(0);

    var _drawable2 = _interopRequireDefault(_drawable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } /**
       * Created by Pavel on 01.04.2017.
       */
    //TODO jeden spolecny predek pro vsechny co se budou hybat


    var Player = function (_Drawable) {
        _inherits(Player, _Drawable);

        function Player(posX, posY, w, h, speed, imgSrc) {
            _classCallCheck(this, Player);

            var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, posX, posY, w, h, imgSrc));

            _this._posX = posX;
            _this._posY = posY;
            _this._w = w;
            _this._h = h;
            _this._dx = 0;
            _this._dy = 0;
            _this._speed = speed;
            _this._score = 0;
            _this._primaryAction = false;
            _this._backpack = new _backpack2.default();
            _this._animation = new _animation2.default(_this.image, 4, 150, 0, [32, 30], [6, 42], [_this.w, _this.h]);
            return _this;
        }

        _createClass(Player, [{
            key: 'doPrimaryAction',
            value: function doPrimaryAction() {
                //TODO nad timhle jeste pouvazovat
                if (this._primaryAction == false) {
                    // console.log('doing');
                    this._primaryAction = true;
                    setTimeout(function () {
                        this._primaryAction = false;
                        //console.log('not doing');
                    }.bind(this), 500);
                }
            }
        }, {
            key: 'isDoingPrimaryAction',
            value: function isDoingPrimaryAction() {
                return this._primaryAction;
            }
        }, {
            key: 'addToScore',
            value: function addToScore(points) {
                this._score += points;
            }
        }, {
            key: 'update',
            value: function update() {
                this._posX += this._dx;
                this._posY += this._dy;
            }
        }, {
            key: 'draw',
            value: function draw(ctx) {
                //DRAW PLAYER BOUNDS
                // ctx.beginPath();
                // ctx.fillStyle = "white";
                // ctx.fillRect(this.posX, this.posY, this.w,this.h);
                // ctx.closePath();
                this._animation.drawActualFrame(ctx, this.posX, this.posY);
            }
        }, {
            key: 'animate',
            value: function animate() {}
        }, {
            key: 'dx',
            set: function set(value) {
                this._dx = value;
            },
            get: function get() {
                return this._dx;
            }
        }, {
            key: 'dy',
            set: function set(value) {
                this._dy = value;
            },
            get: function get() {
                return this._dy;
            }
        }, {
            key: 'speed',
            get: function get() {
                return this._speed;
            }
        }, {
            key: 'score',
            get: function get() {
                return this._score;
            }
        }, {
            key: 'backpack',
            get: function get() {
                return this._backpack;
            }
        }, {
            key: 'playerAnimation',
            get: function get() {
                return this._animation;
            }
        }]);

        return Player;
    }(_drawable2.default);

    exports.default = Player;

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 03.04.2017.
     */
    var Controls = function () {
        function Controls(gameState) {
            _classCallCheck(this, Controls);

            this.movingKeyDown = function (event) {
                var playerSpeed = this.gs.player.speed;
                if (event.keyCode == 37) {
                    this.gs.player.dy = 0;
                    this.gs.player.dx = -playerSpeed; //left
                    this.gs.player.playerAnimation.setFromToY([54, 42]);
                    this.gs.player.playerAnimation.runAnimation();
                } else if (event.keyCode == 38) {
                    this.gs.player.dx = 0;
                    this.gs.player.dy = -playerSpeed; //up
                    this.gs.player.playerAnimation.setFromToY([150, 42]);
                    this.gs.player.playerAnimation.runAnimation();
                } else if (event.keyCode == 39) {
                    this.gs.player.dy = 0;
                    this.gs.player.dx = playerSpeed; //right
                    this.gs.player.playerAnimation.setFromToY([102, 42]);
                    this.gs.player.playerAnimation.runAnimation();
                } else if (event.keyCode == 40) {
                    this.gs.player.dx = 0;
                    this.gs.player.dy = playerSpeed; //down
                    this.gs.player.playerAnimation.setFromToY([6, 42]);
                    this.gs.player.playerAnimation.runAnimation();
                } else if (event.keyCode == 13) {
                    //enter
                    this.gs.player.doPrimaryAction();
                } else if (event.keyCode == 66) {
                    //b
                    this.gs.backpackOpened = !this.gs.backpackOpened;
                }
            }.bind(this);

            this.movingKeyUp = function (event) {
                if (event.keyCode == 37 && this.gs.player.dx < 0) {
                    this.gs.player.dx = 0;
                    this.gs.player.playerAnimation.stopAnimation();
                } else if (event.keyCode == 38 && this.gs.player.dy < 0) {
                    this.gs.player.dy = 0;
                    this.gs.player.playerAnimation.stopAnimation();
                } else if (event.keyCode == 39 && this.gs.player.dx > 0) {
                    this.gs.player.dx = 0;
                    this.gs.player.playerAnimation.stopAnimation();
                } else if (event.keyCode == 40 && this.gs.player.dy > 0) {
                    this.gs.player.dy = 0;
                    this.gs.player.playerAnimation.stopAnimation();
                }
            }.bind(this);

            this.dialogKeyDown = function (event) {
                if (event.keyCode == 13) {
                    if (this.gs.dialogs.length != 0) {
                        //console.log(this.gs.dialogs);
                        this.gs.dialogs.splice(0, 1);
                        if (this.gs.dialogs.length == 0) {
                            this.switchToMovingControls();
                        }
                    }
                }
            }.bind(this);

            this.switchToDialogControls = function () {
                this.gs.player.dx = 0;
                this.gs.player.dy = 0;
                document.removeEventListener('keydown', this.movingKeyDown);
                document.removeEventListener('keyup', this.movingKeyUp);
                document.addEventListener('keydown', this.dialogKeyDown);
            }.bind(this);

            this.switchToMovingControls = function () {
                document.removeEventListener('keydown', this.dialogKeyDown);
                document.addEventListener('keydown', this.movingKeyDown);
                document.addEventListener('keyup', this.movingKeyUp);
            }.bind(this);

            this.gs = gameState;
        }

        _createClass(Controls, [{
            key: 'init',
            value: function init() {
                document.addEventListener('keydown', this.movingKeyDown);
                document.addEventListener('keyup', this.movingKeyUp);
            }
        }]);

        return Controls;
    }();

    exports.default = Controls;

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _class, _temp;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 03.04.2017.
     */
    var ItemManager = (_temp = _class = function () {
        function ItemManager() {
            _classCallCheck(this, ItemManager);
        }

        _createClass(ItemManager, null, [{
            key: 'getItem',
            value: function getItem(id) {
                return this._items[id];
            }
        }, {
            key: 'items',
            get: function get() {
                return this._items;
            }
        }]);

        return ItemManager;
    }(), _class._items = {
        2: { name: 'Pokeball', desc: 'standard ball to catch pokemons.' },
        3: { name: 'GreatBall', desc: 'slightly better ball to catch stronger pokemons' },
        4: { name: 'UltraBall', desc: 'strong ball to catch really strong pokemons' }
    }, _temp);
    exports.default = ItemManager;

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _class, _temp;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 04.04.2017.
     */

    var LevelManager = (_temp = _class = function () {
        function LevelManager() {
            _classCallCheck(this, LevelManager);
        }

        _createClass(LevelManager, null, [{
            key: "initLevels",
            value: function initLevels() {
                //TODO nacitat ze souboru
                var level1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
                this._levels.push(level1);
            }
        }, {
            key: "nextLevel",
            value: function nextLevel() {
                this._actualLevelIndex++;
            }
        }, {
            key: "actualLevel",
            get: function get() {
                return this._levels[this._actualLevelIndex];
            }
        }]);

        return LevelManager;
    }(), _class._actualLevelIndex = 0, _class._levels = [], _temp);
    exports.default = LevelManager;

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _class, _temp;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 04.04.2017.
     */

    var ResourceManager = (_temp = _class = function () {
        function ResourceManager() {
            _classCallCheck(this, ResourceManager);
        }

        _createClass(ResourceManager, null, [{
            key: "get",
            value: function get(name) {
                return this._resources[name];
            }
        }, {
            key: "resources",
            get: function get() {
                return this._items;
            }
        }]);

        return ResourceManager;
    }(), _class._resources = {
        "trainer": '/img/trainer.png',
        "grass": '/img/grass.png',
        "pokeball": '/img/pokeball.png',
        "wall": '/img/wall.png'
    }, _temp);
    exports.default = ResourceManager;

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _drawable = __webpack_require__(0);

    var _drawable2 = _interopRequireDefault(_drawable);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    } /**
       * Created by Pavel on 03.04.2017.
       */

    var Backpack = function (_Drawable) {
        _inherits(Backpack, _Drawable);

        function Backpack() {
            _classCallCheck(this, Backpack);

            var _this = _possibleConstructorReturn(this, (Backpack.__proto__ || Object.getPrototypeOf(Backpack)).call(this));

            _this._backpack_items = [];
            return _this;
        }

        _createClass(Backpack, [{
            key: "addToBackpack",
            value: function addToBackpack(item) {
                for (var i = 0; i < this._backpack_items.length; i++) {
                    if (this._backpack_items[i].name == item) {
                        this._backpack_items[i]["quantity"] = this._backpack_items[i]["quantity"] + 1;
                        return;
                    }
                }
                this._backpack_items.push({ name: item, quantity: 1 });
            }
        }, {
            key: "removeFromBackpack",
            value: function removeFromBackpack(item) {
                for (var i = 0; i < this._backpack_items.length; i++) {
                    if (this._backpack_items[i] == item) {
                        this._backpack_items.splice(i, 1);
                    }
                }
            }
        }, {
            key: "getBackpackItems",
            value: function getBackpackItems() {
                return this._backpack_items;
            }
        }, {
            key: "setPosition",
            value: function setPosition(x, y, w, h) {
                this.setPosX(x);
                this.setPosY(y);
                this.setWidth(w);
                this.setHeight(h);
            }
        }, {
            key: "draw",
            value: function draw(ctx) {
                //backpack rect
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 2;
                ctx.fillRect(this.posX, this.posY, this.w, this.h);
                ctx.strokeRect(this.posX, this.posY, this.w, this.h);

                //backpack heading
                ctx.textBaseline = "middle";
                ctx.font = "12px Impact";
                ctx.fillStyle = "black";
                var backpackHeading = "Backpack";
                var textX = this.posX + this.w / 2 - ctx.measureText(backpackHeading).width / 2;
                var textY = this.posY + 15;
                //line under heading
                ctx.fillStyle = "black";
                ctx.fillText(backpackHeading, textX, textY);
                ctx.moveTo(this.posX, textY + 15);
                ctx.lineTo(this.posX + this.w, textY + 15);
                ctx.stroke();

                //setup for items
                ctx.textBaseline = "middle";
                ctx.font = "10px Arial";
                ctx.fillStyle = "black";
                var paddingTop = 15;
                var lineHeight = 15;

                //draw items
                for (var i = 0; i < this._backpack_items.length; i++) {
                    var itemText = this._backpack_items[i].quantity + "x " + this._backpack_items[i].name;
                    textX = this.posX + this.w / 2 - ctx.measureText(itemText).width / 2;
                    textY = this.posY + 10 + (i + 1) * lineHeight + paddingTop;
                    ctx.fillText(itemText, textX, textY);
                }
            }
        }]);

        return Backpack;
    }(_drawable2.default);

    exports.default = Backpack;

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var _player = __webpack_require__(4);

    var _player2 = _interopRequireDefault(_player);

    var _drawable = __webpack_require__(0);

    var _drawable2 = _interopRequireDefault(_drawable);

    var _interactive_tile = __webpack_require__(1);

    var _interactive_tile2 = _interopRequireDefault(_interactive_tile);

    var _controls = __webpack_require__(5);

    var _controls2 = _interopRequireDefault(_controls);

    var _item = __webpack_require__(3);

    var _item2 = _interopRequireDefault(_item);

    var _item_manager = __webpack_require__(6);

    var _item_manager2 = _interopRequireDefault(_item_manager);

    var _level_manager = __webpack_require__(7);

    var _level_manager2 = _interopRequireDefault(_level_manager);

    var _dialog = __webpack_require__(2);

    var _dialog2 = _interopRequireDefault(_dialog);

    var _resource_manager = __webpack_require__(8);

    var _resource_manager2 = _interopRequireDefault(_resource_manager);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    //init canvas
    var canvas = document.getElementById("myCanvas"); /**
                                                       * Created by Pavel on 01.04.2017.
                                                       */

    var ctx = canvas.getContext('2d');
    ctx.scale(2, 2);

    //init game stuff
    var state = {
        player: new _player2.default(canvas.width / 2, canvas.height / 2, 18, 24, 2, _resource_manager2.default.get("trainer")),
        dialogs: [],
        backpackOpened: false
    };
    _level_manager2.default.initLevels();
    var level = _level_manager2.default.actualLevel;
    var walls = [],
        items = [],
        grass = [];
    var controls = new _controls2.default(state);
    controls.init();
    initLevel();

    /////////////////////////////////////////
    function initLevel() {
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {
                switch (level[i][j]) {
                    case 0:
                        grass.push(new _drawable2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('grass')));
                        break;
                    case 1:
                        walls.push(new _interactive_tile2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('wall')));
                        break;
                    case 2:
                    case 3:
                    case 4:
                        grass.push(new _drawable2.default(j * 32, i * 32, 32, 32, _resource_manager2.default.get('grass')));
                        items.push(new _item2.default(j * 32, i * 32, 32, 32, _item_manager2.default.getItem(level[i][j]), _resource_manager2.default.get('pokeball')));
                        break;
                }
            }
        }
    }

    //TODO vymyslet co s timto - presunout nepresunout?
    function checkCollisions() {
        for (var i = 0; i < walls.length; i++) {
            if (walls[i].checkCollisionWithPlayer(state.player)) {
                state.player.dx = 0;
                state.player.dy = 0;
                state.player.playerAnimation.stopAnimation();
            }
        }
        for (var _i = 0; _i < items.length; _i++) {
            if (items[_i].checkCollisionWithPlayer(state.player)) {
                if (state.player.isDoingPrimaryAction()) {
                    controls.switchToDialogControls();
                    var dialogX = state.player.posX - canvas.width / 8 + state.player.w / 2;
                    var dialogY = state.player.posY + canvas.height / 2 - 200;
                    var dialogHeight = 50;
                    var dialogWidth = canvas.width / 4;
                    state.dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + items[_i].itemInfo.name));
                    state.dialogs.push(new _dialog2.default(dialogX, dialogY, dialogWidth, dialogHeight, items[_i].itemInfo.name + " is " + items[_i].itemInfo.desc));
                    state.player.backpack.addToBackpack(items[_i].itemInfo.name);
                    items.splice(_i, 1); //remove from map
                }
            }
        }
    }

    //game updates////////
    function update() {
        checkCollisions();
        state.player.update();
        draw();
    }
    //draw
    function draw() {
        clearCanvas();
        ctx.save();
        ctx.translate(-state.player.posX + canvas.width / 2 / 2 - state.player.w, -state.player.posY + canvas.height / 2 / 2 - state.player.h);

        for (var i = 0; i < walls.length; i++) {
            walls[i].draw(ctx);
        }
        for (var _i2 = 0; _i2 < grass.length; _i2++) {
            grass[_i2].draw(ctx);
        }
        for (var _i3 = 0; _i3 < items.length; _i3++) {
            items[_i3].draw(ctx);
        }

        state.player.draw(ctx);
        if (state.dialogs.length != 0) {
            state.dialogs[0].draw(ctx);
        }

        if (state.backpackOpened) {
            var bpX = state.player.posX + canvas.width / 8 + state.player.w / 2;
            var bpY = state.player.posY - canvas.height / 8 - 50;
            var bpHeight = canvas.height / 2 - 15;
            var bpWidth = 160;
            state.player.backpack.setPosition(bpX, bpY, bpWidth, bpHeight);
            state.player.backpack.draw(ctx);
        }
        ctx.restore();
    }

    function clearCanvas() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    setInterval(update, 1000 / 60);

    ///animation test

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Created by Pavel on 03.04.2017.
     */
    var Animation = function () {
        function Animation(sprite, frames, speed, startFrom, fromToX, fromToY, frameSize) {
            _classCallCheck(this, Animation);

            this._sprite = sprite;
            this._frames = frames;
            this._actualFrame = startFrom;
            this._speed = speed;
            this._isRunning = false;
            this._fromToY = fromToY;
            this._fromToX = fromToX;
            this._frameSize = frameSize;
        }

        _createClass(Animation, [{
            key: "runAnimation",
            value: function runAnimation() {
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
        }, {
            key: "stopAnimation",
            value: function stopAnimation() {
                if (this._isRunning) {
                    this._actualFrame = 0;
                    clearInterval(this._timer);
                    this._isRunning = false;
                }
            }
        }, {
            key: "drawActualFrame",
            value: function drawActualFrame(ctx, posX, posY) {
                ctx.drawImage(this._sprite, this._actualFrame * this._fromToX[0], this._fromToY[0], this._fromToX[1], this._fromToY[1], posX, posY, this._frameSize[0], this._frameSize[1]);
            }
        }, {
            key: "setFromToY",
            value: function setFromToY(value) {
                this._fromToY = value;
            }
        }, {
            key: "actualFrame",
            get: function get() {
                return this._actualFrame;
            }
        }, {
            key: "isRunning",
            get: function get() {
                return this._isRunning;
            },
            set: function set(value) {
                this._isRunning = value;
            }
        }, {
            key: "fromToY",
            get: function get() {
                return this._fromToY;
            }
        }]);

        return Animation;
    }();

    exports.default = Animation;

    /***/
}]);

//# sourceMappingURL=client.min-compiled.js.map