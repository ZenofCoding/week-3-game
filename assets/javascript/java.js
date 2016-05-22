 var wordLetters= ['p','u','l','p','f','i','c','t','i','o''n'];
 var guessedLetters= ['_', '_', '_', '_','_', '_', '_', '_','_', '_', '_'];

      function guessLetter(letter) {
          var goodGuess = false;
          var moreToGuess = false;
          for (var i = 0; i < wordLetters.length; i++) {
              if (wordLetters[i] == letter) {
                  guessedLetters[i] = letter;
                  goodGuess = true;
              }
              if (guessedLetters[i] == '_') {
                  moreToGuess = true;
              }
          }
          if (goodGuess) {
              console.log('Good Job!');
              console.log(guessedLetters.join(''));
              if (!moreToGuess) {
                  console.log('YOU WIN!');
              } 
          } else {
              console.log('Oh noes, thats not right!');
          }
      }

      guessLetter('p');
      guessLetter('u');
      guessLetter('l');
      guessLetter('p');
      guessLetter('f');
      guessLetter('i');
      guessLetter('c');
      guessLetter('t');
      guessLetter('i');
      guessLetter('o');
      guessLetter('n');


    
    
    