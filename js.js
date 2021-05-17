const getUserChoice = userInput => {
	let input = prompt("Enter your choice:")
  if (['rock', 'paper', 'scissors'].includes(input.toLowerCase())) {
    userInput = input.toLowerCase()
  }
  else {
    console.log("Invalid input")
  }
  return userInput
}

const getComputerChoice = () => {
  let compInput = Math.floor(Math.random() * 3)
  let compChoice = ''
  switch(compInput) {
    case 0:
      compChoice = "rock"
      break
    case 1:
      compChoice = "paper"
      break
    case 2:
      compChoice = "scissors"
      break
  }
  return compChoice
}

const determineWinner = (userChoice, computerChoice) => {

	let result = ""
	if (userChoice === computerChoice) {
		result = "Tie"
	}
	else if (userChoice === "rock") {
		if (computerChoice === "paper") {
			result = "Computer won"
		}
		else if (computerChoice === "scissors") {
			result = "User won"
		}
	}
	else if (userChoice === "paper") {
		if (computerChoice === "rock") {
			result = "User won"
		}
		else if (computerChoice === "scissors") {
			result = "Computer won"
		}
	}
	else if (userChoice === "scissors") {
		if (computerChoice === "paper") {
			result = "User won"
		}
		else if (computerChoice === "rock") {
			result = "Computer won"
		}
	}
	return result 
}


const playGame = () => {
	let userChoice = getUserChoice()
	console.log(`User chose: ${userChoice}`)
	let computerChoice = getComputerChoice()
	console.log(`Computer chose: ${computerChoice}`)
 
	let result = determineWinner(userChoice, computerChoice)
	console.log(result)
}

playGame()