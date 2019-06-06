

// Letter.js**: Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

//  `Letter.js` *should not* `require` any other files.

//  **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// **HINT:** If you name your letter's display function `toString`, 
// JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)


// Constructor that displays a character or blank placeholder based on a users guess
function Letter () {
    this.letter = letter; // a string 
    this.guessed = guessed // A boolean
    this.toString = function() { // Named toString so JS will automatically call this function when concatenating a string
        if (guessed === 0) {
            // return underscores 
            
        } if (guessed === 1) {
            // return the letter
        }
    };
    this.characterCheck = function() {
        
    };
    
    this.printInfo = function(){
        console.log("Letter: " + letter)
    };
};
    
    
    
    // Use inquirer to grab the user's guess
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter?"
        }, {
            name: "position",
            message: "What is your current position?"
        }, {
            name: "age",
            message: "How old are you?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }
    ]).then(function(userInput) {
        // initializes the variable newProgrammer to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newLetter = new Letter(userInput.letter);
        // printInfo method is run to show that the newProgrammer object was successfully created and filled
        newLetter.printInfo();
    });
    
    // Export the Letter Constructor
    module.exports = Letter;