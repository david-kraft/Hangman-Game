// wordBank contains items that would be cute or comforting to a baby.
var wordBank = ["BUNNY", "KITTEN", "SQUIRREL", "BLANKET", "PILLOW", "MOBILE", "SWING", "CLOWN"];

document.getElementById("babyPicture").onclick = function() {startGame()};

function startGame(){

    // Display the letter bank

        // assign the upper-case alphabet to a string variable
        var alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log ("alphabetString = " + alphabetString);

        // Split alphabet into an array with one letter per item
        var alphabetArray = alphabetString.split("");
        console.log ("alphabetArray = " + alphabetArray);

        // Displays the letter bank
        for (i = 0; i < alphabetString.length; i++) {
            document.getElementById("letterBank").innerHTML += '<button onclick="choice("' + alphabetArray[i] + '")" class="btn btn-light btn-lg rounded-circle m-1" id="' + alphabetArray[i] + '-button"><span class="bank-letter">' + alphabetArray[i] + '</span>'

        }
    // 

    // Generate Random Word
    var puzzleWord = wordBank[Math.floor(Math.Random * wordBank.length)];
    console.log ("puzzleWord = " + puzzleWord);
    // Split puzzleWord into an array with one letter per item
    var puzzleArray =puzzleWord.split("");
    console.log ("puzzleArray = " + puzzleArray);

    

} /* End of startGame function */

// console.log(puzzleWord)

function choice(){
    console.log("Clicked")
    var userGuess = element.getAttribute(attributeName);
}
document.addEventListener("click", choice());
