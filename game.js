var fs = require('fs');

function getList() {
  var file = 'words.txt';
  var words = fs.readFileSync(file);

  return words.toString().split('\n');
}

function getWord() {
  var wordsArr = getList();
  return wordsArr[rand(wordsArr.length)].trim();
}

function rand(len) {
  return Math.floor(Math.random()*len);
}

module.exports = {
  getWord: getWord
};
