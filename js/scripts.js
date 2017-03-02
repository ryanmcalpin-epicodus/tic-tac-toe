function Player(mark) {
  this.markCharacter = mark;
}

Player.prototype.mark = function() {
  return this.markCharacter;
};

function Space(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.markedBy = "";
}

Space.prototype.getX = function () {
  return this.xCoordinate;
};
Space.prototype.getY = function () {
  return this.yCoordinate;
};
Space.prototype.mark = function (whateverPlayer) {
  this.markedBy = whateverPlayer.markCharacter;
};

var board = [];
for (var y = 0; y < 3; y++) {
  for (var x = 0; x < 3; x++) {
    var newSpace = new Space(x, y);
    board.push(newSpace);
  }
}

var switchTurn = function() {
  if (turnIndex === 0) {
    turnIndex = 1;
  } else {
    turnIndex = 0;
  }
}

var checkWin = function() {
  var mark = players[turnIndex].markCharacter;
  if ((board[0].markedBy === mark && board[1].markedBy === mark && board[2].markedBy === mark) || (board[3].markedBy === mark && board[4].markedBy === mark && board[5].markedBy === mark) || (board[6].markedBy === mark && board[7].markedBy === mark && board[8].markedBy === mark) || (board[0].markedBy === mark && board[3].markedBy === mark && board[6].markedBy === mark) || (board[1].markedBy === mark && board[4].markedBy === mark && board[7].markedBy === mark) || (board[2].markedBy === mark && board[5].markedBy === mark && board[8].markedBy === mark) || (board[0].markedBy === mark && board[4].markedBy === mark && board[8].markedBy === mark) || (board[2].markedBy === mark && board[4].markedBy === mark && board[6].markedBy === mark)) {
    return true;
  } else {
    return false;
  }
}

var turnIndex = 0;

var playerX = new Player("X");
var playerO = new Player("O");
var players = [playerX, playerO];
