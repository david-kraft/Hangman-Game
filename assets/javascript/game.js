// wordBank contains items that would be cute or comforting to a baby.
var wordBank = ["BUNNY", "KITTEN", "SQUIRREL", "BLANKET", "PILLOW", "MOBILE", "SWING", "CLOWN"];


// Split alphabet into an array with one letter per item
var alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log("alphabetArray = " + alphabetArray);


// The triggering event is in the HTML. That way I can disable it during the game and re-enable it for game over
function startGame() {

    // disables the button that starts the game
    document.getElementById("babyPicture").onclick = null;


    // Displays the letter bank
    for (i = 0; i < alphabetArray.length; i++) {
        document.getElementById("letterBank").innerHTML += '<button onclick="choice("' + alphabetArray[i] + '")" class="btn btn-light btn-lg rounded-circle m-1" id="' + alphabetArray[i] + '-button"><span class="bank-letter">' + alphabetArray[i] + '</span>'
    }

    // Generate Word

    // Select random string item from array
    var puzzleWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("puzzleWord: " + puzzleWord);
    var puzzleArray = puzzleWord.split("")
    console.log("puzzleArray: " + puzzleArray)

    var blank = "_";
    var blankWord = "";
    var l = puzzleWord.length;
    blankWord = blank.repeat(l);
    console.log("blankWord: " + blankWord);

    // blankArray will be the split blankWord
    var blankArray = blankWord.split("");
    console.log("blankArray: " + blankArray);

    function loadFillingPuzzle() {

        while (getElementById("currentWord").firstChild) getElementById("currentWord").removeChild(getElementById("currentWord").firstChild);


        for (i = 0; i < blankArray.length; i++) {
            document.getElementById("currentWord").innerHTML += '<button class="btn btn-outline-info btn-lg m-1" disabled><span class="bank-letter">' + blankArray[i] + '</span>'
        }
    }

    loadFillingPuzzle()

    function choice(letterClicked) {
        console.log("letterClicked: " + letterClicked);

        // If the letter is not in the word, turns the background of button to red/bootstrap danger
        if (puzzleWord.indexOf(letterClicked) === -1) {
            getElementById(letterClicked + "-button").className = "btn btn-danger btn-lg rounded-circle m-1";


        } else {
            getElementById(letterClicked + "-button").className = "btn btn-success btn-lg rounded-circle m-1";

            for (i = 0; i < blankArray.length; i++) {
                if (puzzleArray[i] === letterClicked) {
                    blankArray[i] = letterClicked
                }

            }
        }
        loadFillingPuzzle()
    }
} /* End of startGame function */
