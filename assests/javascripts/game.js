//Globals
var ChosenThing;
var isItPsy;
var AlphabetArray;
var wins = 0;
var loss = 0;
var trueloss = 0;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    console.log("EventKeyUP", event.key);
    var userGuess = event.key;
    var InputCorrect;
    console.log("Player has inputted  " + userGuess);
    InputCorrect = checkinput(userGuess);
    console.log(InputCorrect);
    if (InputCorrect === true) {
        if (isItPsy === true) {
            IsPsy(userGuess);
        } else {

        }
    } else {
        alert("Please input a alphabetal letter");
    }


}

function IsPsy(userGuess) {
    var Iscorrect;
    Iscorrect = CompareChosen(userGuess);
    if (Iscorrect == true) {
        alert("Hey You guessed Correct!");
        wins++;
        loss = 0;
        startupPsy();
    } else {
        alert("You Lost");
        loss++;
    }
    SetWinsLoss();
    console.log("You lost x times  " + loss)
    CheckIfWonOrLost();
}

function CheckIfWonOrLost() {
    console.log("Wins is " + wins);
    if (wins == 3) {
        alert("Congrants You won!");
        resetgame();
    }
    if (loss == 3) {
        alert("Welp you lost");
        trueloss++;
        resetgame();
    }
}

function resetgame() {
    wins = 0;
    loss = 0;
    startupPsy();

}

function CompareChosen(Input) {
    console.log(ChosenThing.length);
    for (i = 0; i < ChosenThing.length; i++) {
        if (Input == ChosenThing)
            return true;
    }

}



function checkinput(Input) {
    var isVaild = false;
    for (i = 0; i < AlphabetArray.length; i++) {
        if (Input == AlphabetArray[i]) {
            console.log("InsideCheckinput");
            isVaild = true;
            console.log(isVaild);
            return isVaild;
        }

    }

}


function startupPsy() {
    console.log(wins);

    isItPsy = true;
    console.log("startup()")
    var AplhaArray;
    var ChosenLetter;
    AplhaArray = setupletterArray();
    ChosenLetter = PickLetter(AplhaArray);
    console.log(ChosenLetter);
    SetChosen(ChosenLetter);
     SetWinsLoss();

}

function SetWinsLoss() {

    document.getElementById("NumOfWins").innerHTML = wins;
    document.getElementById("NumOfLoss").innerHTML = trueloss;
    document.getElementById("NumOfGuess").innerHTML = 3 - loss;
}


function setupletterArray() {
    console.log("SetupLetterArray")
    var Alphabet = "abcdefghijklmnopqrstuvwxyz";
    AlphabetArray = Alphabet.split("");
    return AlphabetArray;
}

function PickLetter(aArray) {
    console.log("PickLetter");
    var LetterPicked = aArray[Math.floor((Math.random() * aArray.length))];
    return LetterPicked;

}

function SetChosen(ChosenItem) {
    ChosenThing = ChosenItem;
}

function pickword() {
    var wordlist = ["because", "over", "come", "after"];
    var wordPicked;
    wordPicked = wordlist[Math.floor((Math.Random() * wordlist.length))]
    console.log(wordPicked);
    alert(wordPicked);
    getletter(wordlist);

}

function getletter(as) {
    var wordlist = "asfd";
    alert(wordlist);

    alert.log("second " + as);

}

function codeAddress() {
    alert('okasdfdsafd');
}
