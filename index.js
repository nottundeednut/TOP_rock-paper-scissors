//get user choice
let userChoice = prompt("rock, paper or scissors?")
console.log(userChoice);

//get computer choice
let computerChoice = Math.ceil(Math.random() * 3);
if(computerChoice == 1){
  computerChoice = "rock";
}
else if(computerChoice == 2){
  computerChoice = "paper";
}
else{
  computerChoice = "scissors";
}
console.log(computerChoice);



//computer - user choice compare
 let compare = function(userChoice, computerChoice){
  if (userChoice == computerChoice){
    console.log("draw");
  }
  else if (userChoice == "rock"){
    if (computerChoice == "paper"){
      console.log("computer wins");
    }
    else{
      console.log("user wins");
    }
  }
  else if (userChoice == "paper"){
    if (computerChoice == "rock"){
      console.log("user wins");
    }
    else{
      console.log("computer wins");
    }
  }
  else if(userChoice == "scissors"){
    if (computerChoice == "rock"){
      console.log("computer wins")
    }
    else{
      console.log("user wins")
    }
  }
}

console.log(compare(userChoice, computerChoice));