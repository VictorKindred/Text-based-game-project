// I want there to be a score that is added to the player based off of their actions from scirpted events. This will cause things in the gamae to act differently
//Alt routes, characters will behave different based on your 'stats'
class Player {
  constructor(userName) {
    this.userName = userName;
    this.choice = 0 //The point system will go up and down depending on their choices in-game
    this.inventory = []  //? players might be able to pick up items that they can later use
  }
}

class Terminal { //The Terminal will also have a name- Undecided
  construtor() {
    this.terminalOutput = terminalOutput;
    this.userInput = '';
    this.introText = '';
  }
  
 }


class startGame {
  constructor() {
    this.introText = ''
  }
  intro(){
    console.log(`Initializing 
[Company name] 
-------------------


Welcome user, please enter your name...
`)
}

  
}
const start = new startGame
start.intro()
const message = 'Terminal'

// Update header text
document.querySelector('#header').innerHTML = message;

// Log to console
console.log(message);
