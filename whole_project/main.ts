import playingWhole from "./appModule";

playingWhole();

// function compareWords(secretWord: string, guessedWord: string): string[] {
//     if (secretWord.length !== guessedWord.length) {
//       throw new Error("The secret word and guessed word must have the same length.");
//     }
  
//     const hints: string[] = [];
  
//     // Split the secret and guessed words into arrays of letters
//     const secretWordArray = secretWord.split("");
//     const guessedWordArray = guessedWord.split("");

//     console.log(secretWordArray);
//     console.log(guessedWordArray);
  
//     guessedWordArray.forEach((letter, index) => {
//       if (letter === secretWordArray[index]) {
//         hints.push("green");
//       } else if (secretWordArray.includes(letter)) {
//         hints.push("yellow");
//       } else {
//         hints.push("default");
//       }
//     });
  
//     return hints;
//   }
  
//   // Example usage
//   const secretWord = "YELLO";
//   const guessedWord = "HELLO";
//   const hints = compareWords(secretWord, guessedWord);
  
//   console.log("Hints for guessed word:", hints);
  