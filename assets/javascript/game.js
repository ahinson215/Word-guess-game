// VARIABLES AVAILABLE IN GLOBAL SCOPE
// ====================
// array that holds game answers
let answers= ["starfish","penguin","shark","whale"]
// Solution will be held here. the quotaion marks make it an array
 let chosenWord = "";
 //this will hold letters in chosen word, brackets make it a list
 let lettersInChosenWord = [];
 // This will be the number of underscores we show based on the solution
 let numBlanks = 0;
 // Holds a mix of underscores and solved letters (ex: 'n, _ _, n, _').
 let blanksAndSuccesses = [];
 // Holds all of the wrong guesses
 let wrongGuesses = [];
 // Game counters
 let winCounter = 0;
 let lossCounter = 0;
 let numGuesses = 9;

 //  a function to replace element's text above to whatever key is pressed.
// document.onkeyup = function(event) {
//   userText.textContent = event.key;
// };

//generates random answer from array of answers
//  console.log(item) 

//  FUNCTIONS
// ============================
  function startgame () {
    numGuesses = 9

    //chooses a random item from the answers array
    chosenWord = answers[Math.floor(Math.random() * answers.length)];

// This will break the solution into individual letters to be stored in array.
    lettersInChosenWord = chosenWord.split("");
    

    numBlanks = lettersInChosenWord.length;

     // We print the solution in console (for testing).
  console.log(chosenWord);


  document.onkeyup = function(event) {
    let userGuess = event.key;
    compareGuess(userGuess)
    document.getElementById("lettersguessed").appendChild(userGuess + ", ")
  }
  

  function compareGuess(userGuess){
if( lettersInChosenWord.indexOf(userGuess) !== -1){

  alert("hey you guessed right!")
} 






  }

  // CRITICAL LINES - Here we *reset* the guess and success, array, at each round and the wrong guesses from the previous round.
  blanksAndSuccesses = [];
  wrongGuesses = [];
   
  for (let i = 0; i < numBlanks; i++) {

    blanksAndSuccesses.push("_");
  var element = document.createElement("span");
    element.innerHTML = "_ ";
    document.getElementById("gameword").appendChild(element);


  }

  
console.dir(element)

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);



  
  }

// CALLING THE CODE
// =======================
startgame ()
