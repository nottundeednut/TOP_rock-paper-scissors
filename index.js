//get user choice
let userChoice = prompt("rock, paper or scissors?")

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

//choice test
console.log(userChoice);
console.log(computerChoice);

//computer - user choice compare
if (userChoice == computerChoice){
  console.log("Its a tie");
}
else if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Computer Wins");
}
else if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Computer Wins");
}



