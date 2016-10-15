var fs = require('fs');

function getList() {
  // Pull the letter list and return it as an array
  var file = 'words.txt';
  var words = fs.readFileSync(file);

  return words.toString().split('\n');
}

function getWord() {

  var wordsArr = getList();
  return wordsArr[rand(wordsArr.length)].trim(); // Return a random word from the list
}

function rand(len) {
  // Get a random index of the array between 0 and the array length - 1
  return Math.floor(Math.random()*len);
}

module.exports = {
  getWord: getWord
};
