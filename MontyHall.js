// Monty Hall Trials

// initialize variables
var trials = 1000,
		keepWins = 0,
		keepLosses = 0,
		changeWins = 0,
		changeLosses = 0;

// Connect to HTML table
var keepWinsCell = document.getElementById("keepWins"),
		keepLossesCell = document.getElementById("keepLosses"),
		keepTotalCell = document.getElementById("keepTotal"),
		keepWinPercentageCell = document.getElementById("keepWinPercentage"),
		keepLosePercentageCell = document.getElementById("keepLosePercentage"),
		changeWinsCell = document.getElementById("changeWins"),
		changeLossesCell = document.getElementById("changeLosses"),
		changeTotalCell = document.getElementById("changeTotal"),
		changeWinPercentageCell = document.getElementById("changeWinPercentage"),
		changeLosePercentageCell = document.getElementById("changeLosePercentage");

// Create random door choices
function getRandomDoor (a,b) {
	return a + Math.floor(Math.random() * (b - a + 1));
}

// Main function
function runMontyHall () {

	for (var i=0; i<trials; i++){
// choose doors
	var winDoor = getRandomDoor(1,3),
			chooseDoor = getRandomDoor(1,3),
			changeDoor = getRandomDoor(0,1);
			console.log(winDoor,chooseDoor,changeDoor);

	// Check if changing door
		if (changeDoor == 0) {
			// check if it is a win
			if (winDoor == chooseDoor) {
				keepWins++;
				keepWinsCell.innerHTML = keepWins;
			} else {
					keepLosses++;
					keepLossesCell.innerHTML = keepLosses;
			}


		} else {
			//check if it is a loss
			if (winDoor == chooseDoor) {
				changeLosses++;
				changeLossesCell.innerHTML = changeLosses;
			} else {
				changeWins++;
				changeWinsCell.innerHTML = changeWins;
			}

		}
	}
	keepTotal = keepWins + keepLosses;
	changeTotal = changeWins + changeLosses;
	keepTotalCell.innerHTML = keepTotal;
	changeTotalCell.innerHTML = changeTotal;

	keepWinPercentage = keepWins / keepTotal * 100;
	keepLosePercentage = keepLosses / keepTotal * 100;
	keepWinPercentageCell.innerHTML = Math.round(keepWinPercentage);
	keepLosePercentageCell.innerHTML = Math.round(keepLosePercentage);

	changeWinPercentage = changeWins / changeTotal * 100;
	changeLosePercentage = changeLosses / changeTotal * 100;
	changeWinPercentageCell.innerHTML = Math.round(changeWinPercentage);
	changeLosePercentageCell.innerHTML = Math.round(changeLosePercentage);
}
	
function getRandomDoor (a,b) {
	return a + Math.floor(Math.random() * (b - a + 1));
}

runMontyHall();