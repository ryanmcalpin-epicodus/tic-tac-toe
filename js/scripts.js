function Player(mark) {
  this.markCharacter = mark;
}
Player.prototype.mark = function() {
  return this.markCharacter;
};

function Space() {
  this.markedBy = "";
}
Space.prototype.getX = function () {
  return this.xCoordinate;
};
Space.prototype.getY = function () {
  return this.yCoordinate;
};
Space.prototype.mark = function (whateverPlayer, currentId) {
  if (!this.markedBy) {
    this.markedBy = whateverPlayer.markCharacter;
    updateDisplay(this.markedBy, currentId);
    checkWin();
    switchTurn();
  }
};

var board = [];
for (var i = 0; i < 9; i++) {
  var newSpace = new Space();
  board.push(newSpace);
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
    gameOver();
  } else {
    return;
  }
}

var convertId = function(eyeDee) {
  var newId = eyeDee.slice(-1);
  return newId;
};

var gameOver = function() {
  $("div.winner").show();
  gameIsOver = true;
}

var turnIndex = 0;
var playerX = new Player("X");
var playerO = new Player("O");
var players = [playerX, playerO];
var gameIsOver = false;

var updateDisplay = function(mark, id) {
  $("#" + id).text(players[turnIndex].markCharacter);
}

$(document).ready(function() {
  $(".col-xs-4").click(function() {
    var currentId = $(this).attr('id');
    idNumber = convertId(currentId);
    board[idNumber].mark(players[turnIndex], currentId);
  });
  $("div.winner").click(function() {
    location.reload();
  });

});
