const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorbtn = document.querySelector('#scissors');

const footer = document.querySelector('#footer');
const resultdiv = document.createElement('div');

let PlayerScore = 0;
let ComputerScore = 0;
let ResultStr;


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

function RockPaperScissors (ComputerChoice,PlayerChoice){

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

    if(Result=="player"){
        PlayerScore++;
    }
    else if(Result=="computer"){
        ComputerScore++;
    }
    else{}

    resultdiv.classList.add('result');
    ResultStr = `Score - Computer: ${ComputerScore} Player: ${PlayerScore}`
    resultdiv.textContent = ResultStr;
    footer.appendChild(resultdiv);

}

rockbtn.addEventListener('click',function(){
    RockPaperScissors(getComputerChoice(),"rock");
});

paperbtn.addEventListener('click',function(){
    RockPaperScissors(getComputerChoice(),"paper");
});

scissorbtn.addEventListener('click',function(){
    RockPaperScissors(getComputerChoice(),"scissors");
});


