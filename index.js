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
    this.introText = "Initializing ... [Company Name] Terminal Boot-Up Sequence";
    this.actionPatterns = [
      { pattern: /(knock|bang)\s*(on)?\s*the?\s*door/, response: "You knock on the door. No one answers." },
      { pattern: /turn\s*(the)?\s*(doorknob|handle)/, response: "You turn the handle, but the door is locked." },
      { pattern: /(check|inspect)\s*(the)?\s*window/, response: "You peek through the window and see a shadow moving inside." },
      { pattern: /walk\s*(to)?\s*(the)?\s*(back|backyard)/, response: "You walk around towards the back of the house."}
      
    ];
  }

  // Display text in the terminal
  displayText(text) {
    console.log(text);
  }

  // Handle user input
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
    this.displayText("What do you do next?");
    this.displayText("- Kick the door");
    this.displayText("- Check the windows");
    this.displayText("- Go around the house");
  }

  // Add more methods for other events in story
}



class GameManager {
  constructor() {
    this.player = null;
    this.terminal = null;
  }

  startGame() {
    console.log(this.terminal.introText);
    // Initialize player and terminal here
  }
}
  
}
const gameManager = new GameManager();
gameManager.startGame();
console.log('terminal')

// Update header text
document.querySelector('#header').innerHTML = message;

// Log to console
console.log(message);
