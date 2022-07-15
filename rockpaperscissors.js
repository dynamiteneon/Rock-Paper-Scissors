function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let rando = getRandomInt(3);
    let Computer;

    if(rando==0){
        Computer = "rock";
    }

    else if(rando==1){
        Computer = "paper";

    }

    else if(rando==2){
        Computer = "scissors"
    }

    return Computer;
}

function getPlayerChoice (){
    let PlayerChoice = prompt("Rock, Paper, or Scissors?");
    PlayerChoice = PlayerChoice.toLowerCase();
    return PlayerChoice;
}

function RockPaperScissors (ComputerChoice,PlayerChoice){

    console.log(ComputerChoice);
    console.log(PlayerChoice);
    
    let Result;

    if(ComputerChoice=="rock"){
        
        if(PlayerChoice=="rock"){
            console.log("Tie");
            Result = "tie";
        }
        
        if(PlayerChoice=="paper"){
            console.log("Player wins, paper beats rock!");
            Result = "player";
        }

        if(PlayerChoice=="scissors"){
            console.log("Computer wins, rock beats scissors!");
            Result = "computer";
        }

    }

    else if (ComputerChoice=="paper"){
        
        if(PlayerChoice=="rock"){
            console.log("Computer wins, paper beats rock!");
            Result = "computer";
        }
        
        if(PlayerChoice=="paper"){
            console.log("Tie");
            Result = "tie";
        }

        if(PlayerChoice=="scissors"){
            console.log("Player wins, scissors beats paper!");
            Result = "player";
        }

        
    }

    else if (ComputerChoice="scissors"){
                
        if(PlayerChoice=="rock"){
            console.log("Player wins, rock beats scissors!");
            Result = "player";
        }
        
        if(PlayerChoice=="paper"){
            console.log("Computer wins, scissors beats paper!");
            Result = "computer";
        }

        if(PlayerChoice=="scissors"){
            console.log("Tie");
            Result = "tie"
        }

    }

    return Result;
}

let Plyr = 0;
let Cmptr = 0;

for (let i=0; i<5;i++){
    
    let Round = RockPaperScissors(getComputerChoice(),getPlayerChoice());

    if(Round=="computer"){
        Cmptr++;
    }
    else if(Round=="player"){
        Plyr++;
    }
    else if(Round=="tie"){

    }
}

console.log(Plyr);
console.log(Cmptr);



