# 15 React puzzle
The 15 Puzzle is a sliding puzzle that consists of a 4 by 4 frame of numbered square
tiles in an arbitrary ordering with one space. 

The objective of the puzzle is to place the tiles in order, as shown in the figure below, by making sliding moves that use the empty space. To win the empty space has to be in the right corner

![PictureOfApplication](https://i.ibb.co/LRfFYRw/Ska-rmavbild-2020-05-10-kl-15-39-26.png)

#### Starting point
* The tiles are numered from 1 to 15 + the empty tile.
* It's one empty tile and that is where it is possible to move tiles. In the empty tile's connection.
* The tiles order are randomly.
* If you don't get the priniciple of the game there's a question mark to help you.
* The shuffle button shuffles the tiles (obviously).
* If you have sorted the number 1-15 + 0 you will be receiving winning messages.

### Config
The application's default mode is 4x4 but you can change it in the config-file:
`react-puzzle/src/config/data.js` and change the size from 4 to 3.
`size: 4`
to
`size: 3`
and it will automatically change the default mode to 3x3.
##### Future features
Make a cheating algorithm or something. It's quite simple but I'm too lazy for now hehe. More features: Refactor the 
redundancy that appear in the config and `Board` component. To make the code look more beautiful. Anyhow, possible features:
* Cheating.
* Ranking.
* Time counter.
* Move counter. 
* Saving into a database.

### Techniques
The 15 Puzzle is a stateless and responsive application that works on the web, iPads, etc. 
It's written in React and styled with common CSS and Material-UI.
#### Choice of techniques
React is a given answer since it's for creating rich and engaging web apps fast and efficiently with minimal coding.
When it comes to Material-UI it styles React components fast and easy, simply makes the day a little better. The reason why it was a mild mixture between different CSS was because from start my idea wasn't even styling a thing. 

### Structure
The application is quite simple. Has few functions and what do they? 
* Shuffles the board.
* Checks if it's a win .
* Finds position of clicked tile (with a number).
* Finds the position of the empty tile when a tile (with a number) is clicked.
* Decides if the position of the empty tile and the position of the clicked tile are in range.

 --> If yes, swap.

### Run the application
`npm i`

`npm start`

Application starts on [http://localhost:3000](http://localhost:3000) 
