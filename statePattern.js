/*
video player state

        PLAY->
(IDLE)            (PLAYING)     PAUSED
        <STOP-          -PAUSE->  
                        <-PLAY-
    <----------STOP-------------

*/


/* STATE PATTERN
[Player] ---* [PlayerState] //* means Player has 0, 1, or several of PlayerState object
            ------------|------------
            |           |           |
        [IdleState][PlayingState][PausedState]




        NOTES TO SELF
        READ UP ON STATIC
        READ UP ON STATE PATTERN
        READ UP ON CLASSES

*/
class PlayerState {
    static IDLE = "IDLE"
    static PLAYING = "PLAYING"
    static PAUSED = "PAUSED"
    
    constructor(player) {
        this.player = player;
    }
    play() {}
    pause() {}
    stop() {}       /*when empty js says you aren't supposed to use new on the class.
                    it's more a contract of what a playerstate can do 
                    This is an Abstract Class in java maybe*/
}

class IdleState extends PlayerState {
    //extends does not inherit static
    constructor(player) {
        super(player) //super means we access super class so that it points to PlayerState constructor
    }
    play() { //overloading PlayerState method play()
        this.player.setState(PlayerState.PLAYING);
    }
}

class PlayingState extends PlayerState {
    constructor(player) {
        super(player) //super means we access super class so that this points to PlayerState constructor
    }
    pause() {
        this.player.setState(PlayerState.PAUSED);
    }
    stop() {
        this.player.setState(PlayerState.IDLE);
    }
}

class PausedState extends PlayerState {
    constructor(player) {
        super(player) //super means we access super class so that "this.player" points to PlayerState constructor
    }
    play() {
        this.player.setState(PlayerState.PLAYING);
    }
    stop() {
        this.player.setState(PlayerState.IDLE);
    }
}
class Player {
    states = {
        [PlayerState.IDLE]: new IdleState(this),        //this is the current object, which is given to IdleState
        [PlayerState.PLAYING]: new PlayingState(this),  //this is because each state needs access to the player
        [PlayerState.PAUSED]: new PausedState(this)     //

    }
    currentState = PlayerState.IDLE;

    setState(newState) {
        this.currentState = newState;
        this.status();
    }

    play() {
        this.state[this.currentState].play();
    }
    pause() {
        this.state[this.currentState].pause();
    }
    stop() {
        this.state[this.currentState].stop();
    }
    status() {
        console.log("Current state for player is: " +  this.currentState);
    }
    //play() {
        // if (this.state === "IDLE" || this.state === "PAUSED") {
        //     this.state = "PLAYING"
        // }
        //
        //                   <------------- THIS IS A SIGN SOMETHING IS NOT OKAY, WHEN WE BUILD HUGE IF/ELSE
        //                                  NOT IDEAL
        //this.currentState.play();
    //}
}

const player = new Player();
player.status();
player.play();