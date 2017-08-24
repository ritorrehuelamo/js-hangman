// Hangman Object
function Hangman () {
  this.words = ["IRONHACK", "NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR"]
  this.secretWord = ""
  this.letters = []
  this.errorsLeft = 10

  // Generate the random word
  this.secretWord = this._getWord()
}

// Function that get the random word
Hangman.prototype._getWord = function () {
    var random = Math.floor(Math.random() * this.words.length)
    return this.words[random]
}

// Function to insert a letter
Hangman.prototype.askLetter = function (letter) {
    letter = letter.toUpperCase()
    if (this.letters.indexOf(letter) > -1)
      return

    this.letters.push(letter)
    var correct = this.secretWord.indexOf(letter) > -1

    if (!correct)
      this.errorsLeft -= 1

    return correct
}

// Function that show the current word
Hangman.prototype.getWordStatus = function () {
  var that = this
  var splittedWord = this.secretWord.split('')

  return splittedWord.map(function(letter){
    return that.letters.indexOf(letter) > -1 ? letter : ' '
  })
}

// Game Status
Hangman.prototype.gameStatus = function () {
  if (this._isFinished)
    return 'You Win'
  else if (this._gameOver)
    return 'Game Over'
}

Hangman.prototype._isFinished = function () {
  return this.getWordStatus().indexOf('_') < 0
}

Hangman.prototype._gameOver = function () {
  return this.errorsLeft === 0
}
