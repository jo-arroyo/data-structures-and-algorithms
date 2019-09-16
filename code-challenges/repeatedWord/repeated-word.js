'use strict';

const repeatedWord = (book) => {
  if(book.length < 1){
    return null;
  }

  const bookArray = book.toLowerCase().split(' ');
  const wordSet = new Set();

  for (let i = 0; i < bookArray.length; i++){
    let result = wordSet.has(bookArray[i]);
    if (result){
      return bookArray[i];
    } else {
      wordSet.add(bookArray[i]);
    }
  }
  return null;
};

module.exports = repeatedWord;