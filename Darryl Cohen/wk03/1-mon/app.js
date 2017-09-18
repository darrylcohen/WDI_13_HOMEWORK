var manager = function() {
  var myViewer = viewer();
  var myWord = word();
  var secretWord = '';
  var winningTarget;
  var lives = 8;


  var managerI = {
    initialise : function() {
      myViewer.initialise(this);
      myViewer.drawScreen();
      myViewer.drawLives(lives);
    },
    playGame : function() {
      secretWord = myWord.getWord();
      winningTarget = secretWord.length
      myViewer.displayWord(secretWord);

    },
    letterGuessed : function(letter) {
      var positionArr = myWord.isLetterInWord(letter);
      if (positionArr.length === 0) {
        myViewer.showWrongLetter(letter);
        debugger
        myViewer.loseLife();
      } else {
        positionArr.forEach(function(index){
          myViewer.showLetter(index, secretWord[index])
          managerI.isWordComplete();
        })
      }
    },
    isWordComplete : function () {
      if (myWord.getLettersGuessed() === winningTarget) {

      }
    }
  }
  return managerI
}

var viewer = function() {
  var myManager;
  var letters = document.querySelector('.letters');
  var wordDiv = document.querySelector('.word');
  var livesDiv = document.querySelector('.lives');

  var viewerI = {
    initialise : function(aManager) {
      debugger
      myManager = aManager;

      letters.addEventListener ('click', function(event){
        myManager.letterGuessed(event.target.textContent)
      })

    },
    loseLife : function() {
      debugger
      livesDiv.removeChild(livesDiv.childNodes[0])

    },
    drawLives : function(lives) {
      // for (var i = 0; i < lives; i++) {
      //   var aLifeDiv = document.createElement('div');
      //   aLifeDiv.classList.add('letter');
      //   livesDiv.appendChild(aLifeDiv);
      // }
    },

    displayWord : function(aWord) {
      var wordArr = aWord.split('')
      wordArr.forEach(function(letter){
        var letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        wordDiv.appendChild(letterDiv);
      })

    },
    drawScreen : function () {
      var allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      allLetters.forEach(function(letter){
        var letterDiv = document.createElement('div');
        letterDiv.textContent = letter;
        letterDiv.classList.add('letter');
        letters.appendChild(letterDiv);
      })
    },

    showLetter : function(index, letter) {
      var letters = wordDiv.children;
      letters[index].textContent = letter
    },
    showWrongLetter : function(letter) {
      var wrongLetters = document.querySelector('.usedLetters')
      var letterDiv = document.createElement('div');
      letterDiv.textContent = letter;
      letterDiv.classList.add('letter');
      wrongLetters.appendChild(letterDiv);

    }
  }
  return viewerI
}

var word = function() {
  var myWord;
  var lettersGuessed;
  var dictionary = ['TEACHER', 'STUDENT', 'PERSON']

  var wordI = {
    generateWord : function () {
      myWord = 'TEACHER';
    },
    getWord : function () {
      wordI.generateWord();
      return myWord;
    },
    getLettersGuessed : function () {
      return lettersGuessed;
    },

    isLetterInWord : function(aLetter) {
      var correctLetterArr = [];
      var wordArr = myWord.split('');
      for (var i = 0; i < wordArr.length; i++) {
        if (wordArr[i].toLowerCase() === aLetter.toLowerCase()) {
          correctLetterArr.push(i);
          lettersGuessed++;
        }
      }
      return correctLetterArr;
    }
  }
  return wordI
}


var myManager = manager();
myManager.initialise();
myManager.playGame();
