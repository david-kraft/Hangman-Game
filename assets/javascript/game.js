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

    // Generate Word

        // Select random string item from array
        var puzzleWord = wordBank[Math.floor(Math.Random * wordBank.length)];
        console.log ("puzzleWord = " + puzzleWord);

        // Split puzzleWord into an array with one letter per item
        var puzzleArray =puzzleWord.split("");
        console.log ("puzzleArray = " + puzzleArray);

    // Generate alert divs through a for-loop that contain fixed-width spaces corresponding to the items in the puzzleArray. These alert divs should have ids that match the position in the word or the value of "i" in the for-loop and should have classes to represent the letters. Log the classes, ids of the divs into the console.


    

} /* End of startGame function */

// console.log(puzzleWord)

function choice(){
    console.log("Clicked")
    var userGuess = element.getAttribute(attributeName);
}
document.addEventListener("click", choice());
