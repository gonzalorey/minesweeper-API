const DEFAULT_ROWS = 10;
const DEFAULT_COLUMNS = 10;
const DEFAULT_MINES = 15;

const newGame = (rows = DEFAULT_ROWS, columns = DEFAULT_COLUMNS, mines = DEFAULT_MINES) => {
  board = createEmptyBoard(rows, columns)
  addMines(board, mines);

  var game = {
    board,
    timeStarted: Date.now().toString(),
    prettyTime: Date().toLocaleString()
  };

  return game;
};

var createEmptyBoard = (rows, columns) => {
  var board = [];

  for(var i = 0; i < rows; i++) {
    board[i] = Array(columns).fill(0);
  }

  return board;
};

var addMines = (board, mines) => {
  var rows = board.length;
  var columns = board[0].length;

  if(mines > rows * columns)
    throw new Error('There are more mines than expected :@');

  // first put the mines
  for(var i = 0; i < mines; i++) {
    var rand = Math.floor(Math.random() * rows * columns);

    console.log('selected random', rand);

    while(board[Math.floor(rand/rows)][rand % columns] == '*')
      rand = rand + 1 % rows * columns;

    board[Math.floor(rand/rows)][rand%columns] = '*';
    increaseMineCounters(board, Math.floor(rand/rows), rand%columns, rows, columns)
  }

  return board;
};

var increaseMineCounters = (board, rowPos, columnPos, rows, columns) => {
  if(rowPos - 1 >= 0) {
    board[rowPos-1][columnPos] = board[rowPos-1][columnPos] + 1;

    if(columnPos - 1 >= 0) {
      board[rowPos-1][columnPos-1] = board[rowPos-1][columnPos-1] + 1;
    }

    if(columnPos + 1 < columns) {
      board[rowPos-1][columnPos+1] = board[rowPos-1][columnPos+1] + 1;
    }
  }

  if(columnPos - 1 >= 0) {
    board[rowPos][columnPos-1] = board[rowPos][columnPos-1] + 1;
  }

  if(columnPos + 1 < columns) {
    board[rowPos][columnPos+1] = board[rowPos][columnPos+1] + 1;
  }

  if(rowPos + 1 < rows) {
    board[rowPos+1][columnPos] = board[rowPos+1][columnPos] + 1;

    if(columnPos - 1 >= 0) {
      board[rowPos+1][columnPos-1] = board[rowPos+1][columnPos-1] + 1;
    }

    if(columnPos + 1 < columns) {
      board[rowPos+1][columnPos+1] = board[rowPos+1][columnPos+1] + 1;
    }
  }
}

module.exports = {
    newGame
};