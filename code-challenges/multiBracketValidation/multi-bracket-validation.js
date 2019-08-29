'use strict';

class Stack {
  constructor(){
    this.storage = [];
    this.size = this.storage.length;
    this.top = null;
  }

  push(value){
    this.storage.push(value);
    this.top = this.storage[this.storage.length -1];
    this.size = this.size + 1;
  }

  pop(){
    let returned = this.storage[this.storage.length -1];
    this.storage.pop();
    this.size = this.size -1;
    this.top = this.storage[this.storage.length -1];
    return returned;
  }
}

const multiBracketValidation = (input) => {
  if(typeof input !== 'string'){
    return false;
  }

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const bracketStack = new Stack;

  for(let i = 0; i < input.length; i++){
    if(input[i] === '{' || input[i] === '(' || input[i] === '['){
      bracketStack.push(input[i]);
    } else if (input[i] === '}' || input[i] === ')' || input[i] === ']'){
      let checker = bracketStack.pop();
      if (input[i] !== brackets[checker]){
        return false;
      }
    }
  }
  return true;
};

module.exports = multiBracketValidation;