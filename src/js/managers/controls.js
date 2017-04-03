/**
 * Created by Pavel on 03.04.2017.
 */
export default class Controls {

    player;
    dialogs;

    constructor(player, dialogs){
        this.player = player;
        this.dialogs = dialogs;
    }

    init(){
        document.addEventListener('keydown', this.movingKeyDown);
        document.addEventListener('keyup', this.movingKeyUp);
    }

    movingKeyDown = function(event) {
        let playerSpeed = this.player.speed;
        if(event.keyCode == 37) {
            this.player.dy = 0;
            this.player.dx = -playerSpeed; //left
            this.player.playerAnimation.setFromToY([54,42]);
            this.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 38) {
            this.player.dx = 0;
            this.player.dy = -playerSpeed; //up
            this.player.playerAnimation.setFromToY([150,42]);
            this.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 39) {
            this.player.dy = 0;
            this.player.dx = playerSpeed; //right
            this.player.playerAnimation.setFromToY([102,42]);
            this.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 40) {
            this.player.dx = 0;
            this.player.dy = playerSpeed; //down
            this.player.playerAnimation.setFromToY([6,42]);
            this.player.playerAnimation.runAnimation();
        }
        else if(event.keyCode == 13){ //enter
            this.player.doPrimaryAction();
        }
        else if(event.keyCode == 66) { //b
            console.log(this.player.backpack.getBackpackItems());
        }
    }.bind(this);

    movingKeyUp = function(event){
        if(event.keyCode == 37 && this.player.dx < 0) {
            this.player.dx = 0;
            this.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 38 && this.player.dy < 0) {
            this.player.dy = 0;
            this.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 39 && this.player.dx > 0) {
            this.player.dx = 0;
            this.player.playerAnimation.stopAnimation();
        }
        else if(event.keyCode == 40 && this.player.dy > 0) {
            this.player.dy = 0;
            this.player.playerAnimation.stopAnimation();
        }
    }.bind(this);

    dialogKeyDown = function(event){
        if(event.keyCode == 13){
            if(this.dialogs.length != 0){
                //console.log(this.dialogs);
                this.dialogs.splice(0, 1);
                if(this.dialogs.length == 0){
                    this.switchToMovingControls();
                }
            }
        }
    }.bind(this);


    switchToDialogControls = function(){
        this.player.dx = 0;
        this.player.dy = 0;
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