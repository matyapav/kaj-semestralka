/**
 * Created by Pavel on 01.04.2017.
 */
import Controls from './managers/controls.js'
import LevelManager from './managers/level_manager.js'
import {FPS} from './utils/constants.js';

import StateHandler from './managers/state_handler.js'

window.onload = function () {
    document.querySelector("#controls > button.openControls").addEventListener("click", (e) => {
        let controls = document.querySelector("#controls");
        let openControls = document.querySelector("#controls > button.openControls span");
        if (controls.classList.contains("active")) {
            controls.style.right = "-550px";
            openControls.innerText = "Show controls";
            setTimeout(()=>{
                controls.style.transition = 'right 0.5s, height 0.5s ease 0.5s';
            },1000);
        } else {
            controls.style.right = "0px";
            openControls.innerText = "Hide controls";
            setTimeout(()=>{
                controls.style.transition = 'height 0.5s, right 0.5s ease 0.5s';
            },1000);
        }
        controls.classList.toggle("active");

    });
//init canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);

    let state = new StateHandler();


    LevelManager.initLevels();
    let controls = new Controls(state);
    controls.init();
    state.initActualLevel();

//TODO vymyslet co s timto - presunout nepresunout? UPDATE: teoreticky kdyz si predam state tak to muze byt v itemu
    function checkItemCollisions() {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].checkCollisionWithPlayer(state.player)) {
                if (state.player.isDoingPrimaryAction()) {
                    state.controls = Controls.DIALOG;
                    state.lastConstrols = Controls.MOVING;

                    //TODO nastavit pozici a rozmery dialogu napevno v dialog class
                    let dialogX = state.player.posX - canvas.width / 8 + state.player.w / 2;
                    let dialogY = state.player.posY + canvas.height / 2 - 200;
                    let dialogHeight = 50;
                    let dialogWidth = canvas.width / 4;
                    state.createDialog(dialogX, dialogY, dialogWidth, dialogHeight, "You've found " + state.items[i].itemInfo.name);
                    state.createDialog(dialogX, dialogY, dialogWidth, dialogHeight,
                        state.items[i].itemInfo.name + " is " + state.items[i].itemInfo.desc);
                    state.player.pickUpItem(state.items[i].itemInfo);
                    state.items.splice(i, 1); //remove from map
                }
            }
        }
    }

    let interval = 1000 / FPS,
        lastTime = (new Date()).getTime(),
        currentTime = 0,
        delta = 0;

//game loop////////
    function gameLoop() {
        checkItemCollisions();
        window.requestAnimationFrame(gameLoop);

        currentTime = (new Date()).getTime();
        delta = (currentTime - lastTime);

        if (delta > interval) {
            state.player.update();
            draw();
            lastTime = currentTime - (delta % interval);
            window.requestAnimationFrame(gameLoop);
        }
    }

//draw
    function draw() {
        clearCanvas();
        ctx.save();
        ctx.translate(-state.player.posX + canvas.width / 2 / 2 - state.player.w, -state.player.posY + canvas.height / 2 / 2 - state.player.h);

        for (let i = 0; i < state.walls.length; i++) {
            state.walls[i].draw(ctx);
        }
        for (let i = 0; i < state.grass.length; i++) {
            state.grass[i].draw(ctx);
        }
        for (let i = 0; i < state.items.length; i++) {
            state.items[i].draw(ctx);
        }

        state.player.draw(ctx);
        if (state.dialogs.length != 0) {
            state.dialogs[0].draw(ctx);
        }

        //TODO nastavit pozici napevno v backpacku
        if (state.backpackOpened) {
            let bpX = state.player.posX + canvas.width / 8 + state.player.w / 2;
            let bpY = state.player.posY - canvas.height / 8 - 40;
            let bpHeight = canvas.height / 2 - 15;
            let bpWidth = 160;
            state.player.backpack.setPosition(bpX, bpY, bpWidth, bpHeight);
            state.player.backpack.draw(ctx);
        }
        ctx.restore()
    }

    function clearCanvas() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    gameLoop();

};
