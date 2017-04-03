/**
 * Created by Pavel on 03.04.2017.
 */
export default class Controls {

    player;

    constructor(player){
        this.player = player;
    }

    init(){
        let playerSpeed = this.player.speed;
        document.addEventListener('keydown', function(event) {
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
        }.bind(this));
        document.addEventListener('keyup', function(event) {
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
        }.bind(this));
    }

}