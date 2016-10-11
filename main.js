var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');

console.log(game.getWord());

function Hangman() {

  this.startGame = function() {
    this.word = game.getWord();
    this.guess = [];
    this.guessed = [];
    this.startPrompt();
  };

}

Hangman.prototype.printHangman = function() {

};

Hangman.prototype.startPrompt = function() {

  var self = this;
  inquirer.prompt([
    {
      type: input,
      name: 'test',
      message: 'enter something'
    }
  ]);
};

var hgm = new Hangman();

console.log('===============================================');
console.log('=                                             =');
console.log('=    Welcome to Hangman! (Reborn in Node)     =');
console.log('=                                             =');
console.log('===============================================');
inquirer.prompt([{
  type: confirm,
  name: play,
  message: 'Would you like to play?'
}]).then(function(data) {
  if(data.play) {
    hgm.startGame();
  }
});
