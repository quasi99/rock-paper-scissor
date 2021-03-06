  // Computer play will random switch for computer.
function computerPlay() {
	let random = Math.floor(Math.random()*3);
	switch(random) {
		case(0):
		return "Rock";
		break;
		case(1):
		return "Paper";
		break;
		default:
		return "Scissors"
	}
}

  //return the result and console.log them (not required).
function playRound(playerSelection, computerSelection) {
  // your code here!
  switch(playerSelection.toLowerCase()){
  	case("rock"):
  	return (computerSelection.toLowerCase() == "scissors") ? "win" + console.log("You win! Rock beats Scissors!")
  	      :(computerSelection.toLowerCase() == "paper") ? "lose" + console.log("You lose! Paper beats Rock!")
  	      : "tie" + console.log("It's a tie!");
  	break;
  	case("paper"):
  	return (computerSelection.toLowerCase() == "rock") ? "win" + console.log("You win! Paper beats Rock!")
  	      :(computerSelection.toLowerCase() == "scissors") ? "lose" + console.log("You lose! Scissors beats Paper!")
  	      : "tie" + console.log("It's a tie!");
  	break;
  	case("scissors"):
  	return (computerSelection.toLowerCase() == "paper") ? "win" + console.log("You win! Scissors beats Paper!")
  	      :(computerSelection.toLowerCase() == "rock") ? "lose" + console.log("You lose! Rock beats Scissors!")
  	      : "tie" + console.log("It's a tie!");
  	break;
  	default:
  	return "Something went wrong." + console.log("Something went wrong.");
  }
}

  //run 5 rounds and report the score 
function game() {
	let i;
	let userScore = 0;
	let computerScore = 0;
	for(i=0; i<5; i++) {
		let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
		let result = playRound(playerSelection, computerPlay());
		if(result.indexOf("win") !== -1){
			userScore++;
			console.log(`The user won Round ${i-1}.`)
		}else if(result.indexOf("lose") !== -1){
			computerScore++;
			console.log(`The computer won Round ${i+1}.`)
		}else if(result.indexOf("tie") !== -1){
			console.log(`Round ${i+1} was a tie.`);
	    }else{
		    console.error("Incorrect input.");
		    alert("Please try again. Your options are Rock, Paper, or Scissors.");
		    i--; //replay this round
	}
}


let ties = 5-userScore-computerScore;
let grammar = (ties !=1) ? "games" : "game";
if(userScore>computerScore){
	console.log(`The user wins ${userScore} to ${computerScore}, with ${ties} tied ${grammar}!`);
}else if(computerScore>userScore){
	console.log(`The computer wins ${computerScore} to ${userScore}, with ${ties} tied ${grammar}!`);
}else{
	console.log(`It's a tie! Both players had a score of ${userScore}, with ${ties} tied ${grammar}!`);
}
}
game();