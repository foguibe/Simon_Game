# Simon Game

## Overview

The Simon Game is a web-based game that challenges users to follow a sequence of colors and sounds presented by the game. The goal is to repeat the pattern accurately for as long as possible. This project integrates HTML, CSS, and JavaScript to create an interactive and visually engaging gaming experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Game Mechanics](#game-mechanics)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

1. **Color and Sound Patterns:**
   - The game generates and presents a sequence of colors and sounds that users need to mimic.

2. **User Interaction:**
   - Users can interact with the game by clicking on colored boxes corresponding to the generated pattern.

3. **Scoring System:**
   - The game keeps track of the user's score, indicating the number of successful pattern repetitions.

4. **Audio Integration:**
   - Sounds are played during the game to provide auditory feedback for user actions and game progression.

5. **Responsive Design:**
   - The game interface adjusts dynamically to different screen sizes, ensuring a consistent user experience.

6. **User-Friendly Interface:**
   - Clear instructions, engaging visual design, and intuitive gameplay for an enjoyable user experience.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/foguibe/simon-game.git
   ```

2. Open the `index.html` file in your preferred web browser.

## Usage

1. Open the web page in a browser.
2. Click the "Play" button to start the game.
3. Observe the sequence of colors and sounds presented by the game.
4. Repeat the sequence by clicking on the corresponding colored boxes.
5. The game continues, and the score increases with each successful repetition.
6. If the user makes a mistake, the game ends, and the user's score is displayed.

## Project Structure

- `index.html`: The main HTML file for the landing page and game initiation.
- `game.html`: The HTML file for the actual gameplay.
- `styles.css`: CSS file for styling the game interface.
- `game.css`: Additional CSS file for styling specific to the gameplay.
- `script.js`: JavaScript file for handling game logic and user interactions.
- `games.js`: JavaScript file specific to the game mechanics.

## Technologies Used

- HTML5
- CSS3 (including Flexbox and Grid Layout)
- JavaScript (ES6+)

## Game Mechanics

The game follows these fundamental mechanics:

1. **Game Start:**
   - Users initiate the game by clicking the "Play" button.
   - The game generates a random color and sound sequence.

2. **User Turn:**
   - Users observe the sequence presented by the game.
   - Users repeat the sequence by clicking on the colored boxes.

3. **Scoring:**
   - The game keeps track of the user's successful repetitions, increasing the score.

4. **Game Continuation:**
   - If the user successfully repeats the sequence, the game generates a longer sequence.
   - If the user makes a mistake, the game ends, and the final score is displayed.

5. **Restart:**
   - Users can choose to play again by clicking on the "Play Again" button.

## Responsive Design

The project incorporates responsive design principles to ensure optimal user experiences across various devices. Media queries are used to adapt styles based on different screen sizes, adjusting font sizes, element dimensions, and spacing.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the game.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to [Fortune Oguibe](https://github.com/foguibe) for coding and maintaining this Simon Game.
- Inspiration for the project came from the classic Simon electronic game, aiming to provide a digital and interactive version.
