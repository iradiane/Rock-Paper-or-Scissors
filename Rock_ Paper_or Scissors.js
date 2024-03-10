const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||userInput ==='scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}
console.log(getUserChoice('Paper')); 
console.log(getUserChoice('fork'));
let  randomNumber=Math.floor(Math.random() * 3);
function  getComputerChoice(){
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
      default:
        return 'undifined';
  }
}console.log(getComputerChoice());
function  determineWinner( userChoice,computerChoice){
  if(userChoice === 'bombo')
  {
    return "you win";
  }
  if (userChoice ===computerChoice){
    return"the game is tie";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }}
  console.log(determineWinner('paper', 'scissors')); 
console.log(determineWinner('paper', 'paper')); 
console.log(determineWinner('paper', 'rock'));
function  playGame(){
  let userChoice = getUserChoice('rock');
}
function playGame(){
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
} playGame();

