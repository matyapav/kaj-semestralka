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
        }
        else if(event.keyCode == 38) {
            this.player.dx = 0;
            this.player.dy = -playerSpeed; //up
        }
        else if(event.keyCode == 39) {
            this.player.dy = 0;
            this.player.dx = playerSpeed; //right
        }
        else if(event.keyCode == 40) {
            this.player.dx = 0;
            this.player.dy = playerSpeed; //down
        }
        else if(event.keyCode == 13){
            this.player.doPrimaryAction();
        }
    }.bind(this);

    movingKeyUp = function(event){
        if(event.keyCode == 37 && this.player.dx < 0) {
            this.player.dx = 0;
        }
        else if(event.keyCode == 38 && this.player.dy < 0) {
            this.player.dy = 0;
        }
        else if(event.keyCode == 39 && this.player.dx > 0) {
            this.player.dx = 0;
        }
        else if(event.keyCode == 40 && this.player.dy > 0) {
            this.player.dy = 0;
        }
    }.bind(this);

    dialogKeyDown = function(event){
        if(event.keyCode == 13){
            if(this.dialogs.length != 0){
                console.log(this.dialogs);
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

    }
}