// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. 
// This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

// Word.js` *should only* require `Letter.js`

// Require Letter.js
var Letter = require("./letter");


// Constructor Word : Creates an object representing the letters of the underlying word
function Word() {
    this.word = function() {
        // Should select a word at random from an array of words. Output: String
        

        
    }

};
