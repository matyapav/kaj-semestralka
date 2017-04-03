'use strict';

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
    /******/return __webpack_require__(__webpack_require__.s = 1);
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
     * Created by Pavel on 01.04.2017.
     */
    var Player = function () {
        function Player(posX, posY, width, height, speed) {
            _classCallCheck(this, Player);

            this._posX = posX;
            this._posY = posY;
            this._width = width;
            this._height = height;
            this._speed = speed;
        }

        _createClass(Player, [{
            key: 'move',
            value: function move(dir) {
                switch (dir) {
                    case 'left':
                        this._posX -= this._speed;
                        break;
                    case 'right':
                        this._posX += this._speed;
                        break;
                    case 'up':
                        this._posY -= this._speed;
                        break;
                    case 'down':
                        this._posY += this._speed;
                        break;
                    default:
                        throw Error('unsupported direction');
                }
            }
        }, {
            key: 'drawPlayer',
            value: function drawPlayer() {
                ctx.beginPath();
                ctx.rect(this._posX, this._posY, this._width, this._height);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }, {
            key: 'posX',
            get: function get() {
                return this._posX;
            },
            set: function set(value) {
                this._posX = value;
            }
        }, {
            key: 'posY',
            get: function get() {
                return this._posY;
            },
            set: function set(value) {
                this._posY = value;
            }
        }]);

        return Player;
    }();

    exports.default = Player;

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var _player = __webpack_require__(0);

    var _player2 = _interopRequireDefault(_player);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var canvas = document.getElementById("myCanvas"); /**
                                                       * Created by Pavel on 01.04.2017.
                                                       */

    canvas.style.width = "800px";
    canvas.style.height = "600px";
    var ctx = canvas.getContext('2d');

    var player = new _player2.default(canvas.width / 2, canvas.height - 30, 32, 32, 2);
    function draw() {
        player.drawPlayer();
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        //
    }

    setInterval(draw, 10);

    /***/
}]);

//# sourceMappingURL=client.min-compiled.js.map