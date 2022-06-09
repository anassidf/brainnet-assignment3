let options = document.getElementById('options');
let playerOptionArray = document.getElementsByClassName('option');
let player = document.getElementById('player');
let computerOptionArray = document.getElementsByClassName('computer__option');

let playerChoice = '';
const playerSelection = (choice) => {
	playerChoice = choice;
};

const computerPlay = () => {
	const choices = ['rock', 'paper', 'scissor'];
	let choice = choices[Math.floor(Math.random() * 3)];

	if (choice == 'rock') {
		computerOptionArray.item(0).style.display = 'inline-block';
		computerOptionArray.item(1).style.display = 'none';
		computerOptionArray.item(2).style.display = 'none';
	} else if (choice == 'paper') {
		computerOptionArray.item(0).style.display = 'none';
		computerOptionArray.item(1).style.display = 'inline-block';
		computerOptionArray.item(2).style.display = 'none';
	} else if (choice == 'scissor') {
		computerOptionArray.item(0).style.display = 'none';
		computerOptionArray.item(1).style.display = 'none';
		computerOptionArray.item(2).style.display = 'inline-block';
	}

	return choice;
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return `It\'s a tie`;
	} else if (playerSelection === 'rock' && computerSelection === 'scissor') {
		return `You win ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return `You win ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === 'scissor' && computerSelection === 'paper') {
		return `You win ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You lose ${computerSelection} beats ${playerSelection}`;
	}
};

let computerScore = 0;
let playerScore = 0;
let round = 1;
const game = () => {
	if (round < 5) {
		round++;
		const playerSelection = playerChoice;

		const computerSelection = computerPlay();

		const result = playRound(playerSelection, computerSelection);

		if (result.includes('win')) {
			playerScore++;
		} else if (result.includes('lose')) {
			computerScore++;
		}
	} else {
		let winnerMessage = document.getElementById('winner');
		winnerMessage.style.display = 'inline-block';
		let playAgain = document.getElementById('play__again');
		if (playerScore > computerScore) {
			winnerMessage.innerHTML = `You win the game`;
			playAgain.style.display = 'inline-block';
			winnerMessage.style.color = 'rgb(133, 233, 133)';
		} else if (playerScore < computerScore) {
			winnerMessage.innerHTML = `You lost the game`;
			playAgain.style.display = 'inline-block';
			winnerMessage.style.color = 'red';
		} else {
			winnerMessage.innerHTML = `It's a tie`;
			playAgain.style.display = 'inline-block';
			winnerMessage.style.color = 'rgb(65, 180, 247)';
		}

		round = 1;
		playerScore = 0;
		computerScore = 0;
	}
};

const playAgain = () => {
	document.getElementById('winner').style.display = 'none';
	document.getElementById('play__again').style.display = 'none';
};

playerOptionArray.item(0).addEventListener('click', game);
playerOptionArray.item(1).addEventListener('click', game);
playerOptionArray.item(2).addEventListener('click', game);
