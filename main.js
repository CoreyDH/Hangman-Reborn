var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');

console.log(game.getWord());

function Hangman() {

  var self = this;
  this.word = game.getWord();
  this.guess = [];
  this.guessed = [];
  this.chances = 10;
  this.startPrompt();

}

Hangman.prototype.printHangman = function() {
  console.log('Chances left: ' + this.chances);
  console.log('Letters guessed: ' + this.guessed.join(' '));
  console.log('---------------------------------------');
};

Hangman.prototype.startPrompt = function() {

  var self = this;
  this.printHangman();
  inquirer.prompt([
    {
      type: 'input',
      name: 'test',
      message: 'enter something'
    }
  ]);

};



console.log('===============================================');
console.log('=                                             =');
console.log('=    Welcome to Hangman! (Reborn in Node)     =');
console.log('=                                             =');
console.log('===============================================');

inquirer.prompt([{
  type: 'confirm',
  name: 'play',
  message: 'Would you like to play?'
}]).then(function(data) {
  if(data.play) {
    var hgm = new Hangman();
  } else {
    console.log('Maybe another time!');
  }
});
