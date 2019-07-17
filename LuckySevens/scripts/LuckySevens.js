function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["startingBet"].elements.length; loopCounter++) {
        if (document.forms["startingBet"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
                document.forms["startingBet"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

function validateItems() {
    clearErrors();

    var gameMoney = Number(document.forms["startingBet"]["betValue"].value);
    var firstBet = Number(document.forms["startingBet"]["betValue"].value);
    var highBank = Number(document.forms["startingBet"]["betValue"].value);
    var rollAtHighBank = 1;

    if (gameMoney == "" || isNaN(gameMoney) || gameMoney <= 0) {
        alert("Starting bet must be greater than zero.");
        document.forms["startingBet"]["betValue"].parentElement.className = "form-group has-error";
        document.forms["startingBet"]["betValue"].focus();
        return false;
    }

    for (var rollCounter = 0; gameMoney >= 1; rollCounter++) {
        roll1 = rollDice(6);
        roll2 = rollDice(6);

        if (roll1 + roll2 == 7) {
            gameMoney += 4;
        }

        else {
            gameMoney -= 1;
        }

        if (gameMoney >= highBank) {
            highBank = gameMoney;
            rollAtHighBank = rollCounter;
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again?";
    document.getElementById("resultsBet").innerText = firstBet;
    document.getElementById("resultsTotalRolls").innerText = rollCounter;
    document.getElementById("resultsHighAmount").innerText = highBank;
    document.getElementById("resultsRollsAtHigh").innerText = rollAtHighBank;
    return false;
}
