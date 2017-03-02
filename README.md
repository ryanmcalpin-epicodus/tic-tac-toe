# Tic Tac Toe, 03.02.2017
Projoct for Epicodus, demonstrating proficiency in Objects, Behavior-driven development, branching, Javascript, Jquery, HTML, CSS, and Bootstrap, as well as proper Git procedures.

#### By Ryan McAlpin and Evan Bishop

## Description


## Setup
Download or clone directory. Move to the directory in the command line and open index.html.

## Technologies Used
 * HTML
 * CSS
 * Bootstrap
 * Atom
 * Git
 * Javascript
 * Jquery

## Specifications

#### Creates a board with 9 spaces
  * Input: board
  * Output: [Space, Space, Space, Space, Space, Space, Space, Space, Space]

#### Creates 2 players with X or O marks
  * Input: player0
  * Output: Player {markCharacter: "O"}

#### Returns x or y coordinates of a space
  * Input: board[4].getX()
  * Output: 1

#### Mark a space with the player's markCharacter
  * Input: board[4].mark(playerX); board[4].markedBy;
  * Output: "X"

#### Change turnIndex from 0 to 1 and back
  * Input: switchTurn(); turnIndex;
  * Output: 1

#### checkWin function returns false
  * Input: checkWin()
  * Output: false

#### checkWin function returns true if the top left space is marked
  * Input: board[0].mark(playerX); checkWin();
  * Output: true

#### checkWin function returns true if the top 3 spaces are marked
  * Input: board[0].mark(playerX); board[1].mark(playerX); board[2].mark(playerX); checkWin();
  * Output: true








## Legal
Copyright (c) 2017 Copyright Ryan McAlpin, Evan Bishop All Rights Reserved.<br/>
This webpage is licensed under the MIT license.
