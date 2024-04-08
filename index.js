// I want there to be a score that is added to the player based off of their actions from scirpted events. This will cause things in the gamae to act differently
//Alt routes, characters will behave different based on your 'stats'
class Player {
  constructor(userName) {
    this.userName = userName;
    this.choice = 0 //The point system will go up and down depending on their choices in-game
    this.inventory = []  //? players might be able to pick up items that they can later use
  }
}

class Terminal {
  constructor() {
    this.terminalOutput = '';
    this.userInput = '';
    this.introText = "You(the user) are walked up to the house's large front door";
    this.actionPatterns = [
      { pattern: /knock\s*(on)?\s*the?\s*door/, response: "You knock on the door. No one answers." },
      { pattern: /turn\s*(the)?\s*(doorknob|handle)/, response: "You turn the handle, but the door is locked." },
      { pattern: /check\s*(the)?\s*window/, response: "You peek through the window and see a shadow moving inside." }
    ];
  }

  // Method to display text in the terminal
  displayText(text) {
    console.log(text);
  }

  // Method to handle user input
  handleInput(input) {
    this.userInput = input.toLowerCase(); // Convert input to lowercase for case-insensitivity

    // Loop through current action patterns and check if the user input matches any pattern
    let matched = false;
    for (const pattern of this.actionPatterns) {
      if (pattern.pattern.test(this.userInput)) {
        this.displayText(pattern.response);
        matched = true;
        break;
      }
    }

    // If no match found, display error message
    if (!matched) {
      this.displayText("Invalid input. Please try again.");
    }

    // Handle story progression based on user's actions
    this.progressStory();
  }

  // Method to progress the story based on user actions
  progressStory() {
    // Ex. After knocking on the door, present additional choices to the player
    if (this.userInput.includes('knock')) {
      this.afterKnocking();
    }
    // Add more conditions for different story progressions based on user actions
    // Can add conditions for other actions like turning the handle or checking the window
  }

  // Method to handle story progression after knocking on the door
  afterKnocking() {
    this.displayText("You realize that the house has been abandoned for a long time. You notice the hinges are coming loose.");
    this.displayText("What would you like to do next?");
    this.displayText("- Kick the door");
    this.displayText("- Check the windows");
    this.displayText("- Go around the house");
  }

  // Add more methods for other events in story
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
