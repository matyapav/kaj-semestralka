/**
 * Created by Pavel on 03.04.2017.
 */
export default class Controls {

    gs;

    constructor(gameState){
        this.gs = gameState;
    }

    init(){
        document.addEventListener('keydown', this.movingKeyDown);
        document.addEventListener('keyup', this.movingKeyUp);
    }

    movingKeyDown = function(event) {
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
            this.gs.backpackOpened = !this.gs.backpackOpened;
        }
    }.bind(this);

    movingKeyUp = function(event){
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
    }.bind(this);

    dialogKeyDown = function(event){
        if(event.keyCode == 13){
            if(this.gs.dialogs.length != 0){
                //console.log(this.gs.dialogs);
                this.gs.dialogs.splice(0, 1);
                if(this.gs.dialogs.length == 0){
                    this.switchToMovingControls();
                }
            }
        }
    }.bind(this);


    switchToDialogControls = function(){
        this.gs.player.dx = 0;
        this.gs.player.dy = 0;
        document.removeEventListener('keydown', this.movingKeyDown);
        document.removeEventListener('keyup', this.movingKeyUp);
        document.addEventListener('keydown', this.dialogKeyDown);
    }.bind(this);

    switchToMovingControls = function(){
        document.removeEventListener('keydown', this.dialogKeyDown);
        document.addEventListener('keydown', this.movingKeyDown);
        document.addEventListener('keyup', this.movingKeyUp);

    }.bind(this);
}