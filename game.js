const DEFAULT_ROWS = 10;
const DEFAULT_COLUMNS = 10;
const DEFAULT_MINES = 15;

const newGame = (rows = DEFAULT_ROWS, columns = DEFAULT_COLUMNS, mines = DEFAULT_MINES) => {
    var board = [];

    for(var i = 0; i < rows; i++) {
        board[i] = Array(columns);
    }

    addMines(board, mines);

    var game = {
        board,
        timeStarted: Date.now().toString(),
        prettyTime: Date().toLocaleString()
    };

    return game;
};

const addMines = (board, mines) => {
    // add the mines
};

module.exports = {
    newGame
};