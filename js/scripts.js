function Player(mark) {
  this.markCharacter = mark;
}

Player.prototype.mark = function() {
  return this.markCharacter;
};

function Space(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
}

Space.prototype.getX = function () {
  return this.xCoordinate;
};
Space.prototype.getY = function () {
  return this.yCoordinate;
};

var board = [];
for (var y = 0; y < 3; y++) {
  for (var x = 0; x < 3; x++) {
    var newSpace = new Space(x, y);
    board.push(newSpace);
  }
}


var playerX = new Player("X");
var playerO = new Player("O");
