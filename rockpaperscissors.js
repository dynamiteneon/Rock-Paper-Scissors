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

    if(ComputerChoice=="rock"){
        
        if(PlayerChoice=="rock"){
            console.log("Tie");
        }
        
        if(PlayerChoice=="paper"){
            console.log("Player wins, paper beats rock!");
        }

        if(PlayerChoice=="scissors"){
            console.log("Computer wins, rock beats scissors!");
        }

    }

    else if (ComputerChoice=="paper"){
        
        if(PlayerChoice=="rock"){
            console.log("Computer wins, paper beats rock!");
        }
        
        if(PlayerChoice=="paper"){
            console.log("Tie");
        }

        if(PlayerChoice=="scissors"){
            console.log("Player wins, scissors beats paper!");
        }

        
    }

    else if (ComputerChoice="scissors"){
                
        if(PlayerChoice=="rock"){
            console.log("Player wins, rock beats scissors!");
        }
        
        if(PlayerChoice=="paper"){
            console.log("Computer wins, scissors beats paper!");
        }

        if(PlayerChoice=="scissors"){
            console.log("Tie");
        }

    }
}

RockPaperScissors(getComputerChoice(),getPlayerChoice());



