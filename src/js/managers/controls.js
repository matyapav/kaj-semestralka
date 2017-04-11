/**
 * Created by Pavel on 03.04.2017.
 */
export default class Controls {

    gs;

    static MOVING = 0;
    static DIALOG = 1;
    static BACKPACK = 2;


    constructor(gameState){
        this.gs = gameState;
    }

    init(){
        document.addEventListener('keydown', this.activeControlsKeyDown);
        document.addEventListener('keyup', this.activeControlsKeyUp);
    }

    activeControlsKeyDown = (event) => {
        switch(this.gs.controls){
            case Controls.MOVING:
                this.movingKeyDown(event);
                break;
            case Controls.DIALOG:
                this.dialogKeyDown(event);
                break;
            case Controls.BACKPACK:
                this.backpackKeyDown(event);
                break;
            default:
                throw Error('Controls not defined.');
                break;
        }
    };

    activeControlsKeyUp = (event) => {
        switch(this.gs.controls){
            case Controls.MOVING:
                this.movingKeyUp(event);
                break;
            case Controls.DIALOG:
                break;
            case Controls.BACKPACK:
                break;
            default:
                throw Error('Controls not defined.');
                break;
        }
    };

    movingKeyDown = (event) => {
        let playerSpeed = this.gs.player.speed;
        if(event.keyCode == 37) {
            this.gs.player.dy = 0;
            this.gs.player.dx = -playerSpeed; //left
            this.gs.player.playerAnimation.setFromToY([54,42]);
            this.gs.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 38) {
            this.gs.player.dx = 0;
            this.gs.player.dy = -playerSpeed; //up
            this.gs.player.playerAnimation.setFromToY([150,42]);
            this.gs.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 39) {
            this.gs.player.dy = 0;
            this.gs.player.dx = playerSpeed; //right
            this.gs.player.playerAnimation.setFromToY([102,42]);
            this.gs.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 40) {
            this.gs.player.dx = 0;
            this.gs.player.dy = playerSpeed; //down
            this.gs.player.playerAnimation.setFromToY([6,42]);
            this.gs.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 13){ //enter
            this.gs.player.doPrimaryAction();
        }
        else if(event.keyCode == 66) { //b
            this.gs.backpackOpened = true;
            this.gs.player.stopPlayer();
            this.gs.controls = Controls.BACKPACK;
            this.gs.lastConstrols = Controls.MOVING;
        }
    };

    movingKeyUp = (event) => {
        if(event.keyCode == 37 && this.gs.player.dx < 0) {
            this.gs.player.dx = 0;
            this.gs.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 38 && this.gs.player.dy < 0) {
            this.gs.player.dy = 0;
            this.gs.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 39 && this.gs.player.dx > 0) {
            this.gs.player.dx = 0;
            this.gs.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 40 && this.gs.player.dy > 0) {
            this.gs.player.dy = 0;
            this.gs.player.playerAnimation.stopAnimation();
        }
    };

    dialogKeyDown = (event) => {
        if(event.keyCode == 13){
            if(this.gs.dialogs.length != 0){
                //console.log(this.gs.dialogs);
                this.gs.dialogs.splice(0, 1);
                if(this.gs.dialogs.length == 0){
                    this.gs.controls = this.gs.lastConstrols;
                    this.gs.lastConstrols = Controls.MOVING;
                }
            }
        }
    };

    backpackKeyDown = (event) => {
        if(event.keyCode == 38) {
            if(this.gs.player.backpack._showItemActions){
                this.gs.player.backpack.decrementActionsSelected();
            }else {
                this.gs.player.backpack.decrementSelected();
            }
        }
        else if(event.keyCode == 40) {
            if(this.gs.player.backpack._showItemActions) {
                this.gs.player.backpack.incrementActionsSelected();
            }else{
                this.gs.player.backpack.incrementSelected();
            }
        }
        else if(event.keyCode == 13){ //enter
            if(this.gs.player.backpack._showItemActions) {
                this.gs.player.performSelectedBackpackAction();
            }else{
                this.gs.player.backpack.toggleItemActions();
            }
            //do something with item
        }
        else if(event.keyCode == 66) { //b
            this.gs.backpackOpened = false;
            this.gs.player.backpack.resetBackpackStatusToDefault();
            this.gs.controls = this.gs.lastConstrols;
        }
    };
}