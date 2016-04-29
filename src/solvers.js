/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n:n});
  var length = board.attributes.n;

  var row = 0; 
  var col = 0;

  for (row; row < length; row++){
   if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
     board.togglePiece(row, col);
     col++;
   }
  }

  solution = board.rows();




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
  /*
  var board = new Board({n: n});
   var solution = board.rows();
   for (var i = 0; i < n; i++){
     solution[i][i] = 1;
   }
   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
   return solution;
   */


  
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
    /*
    var factorial = function(m) {
      if (m === 0 || m === 1) {
        return 1;
      } else {
        return m * factorial(m-1);
      }
    }
    return factorial(n);
    */
    var solutions = [];
    var board = new Board({n:n});
    
    var fillSolution = function(rows, currentBoard) {
      if (rows === n) {
        solutions.push(currentBoard);
        return;
      }
      for (var col = 0; col < n; col++) {
        currentBoard.togglePiece(rows, col);
        if (!currentBoard.hasAnyRooksConflicts()) {
          fillSolution(rows+1, currentBoard);
        }
        currentBoard.togglePiece(rows, col);
      }
    }

    fillSolution(0, board);
    return solutions.length;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  /*
  var board = new Board({n:n});

  for (var col = 0; col < n; col++) {
    for (var row = 0; row < n; row++) {
      board.togglePiece(row, col);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
      }
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  return board.rows();
  */
  

  var solutions = [];
  var board = new Board({n:n});

  var fillSolution = function(rows, currentBoard) {
    if (rows === n) {
      solutions.push(currentBoard);
      return;
    }
    for (var col = 0; col < n; col++) {
      currentBoard.togglePiece(rows, col);
      if (!currentBoard.hasAnyQueensConflicts()) {
        fillSolution(rows+1, currentBoard);
      }
      currentBoard.togglePiece(rows, col);
    }
  }

  fillSolution(0, board);
  console.log(solutions);
  return solutions[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = [];
  var board = new Board({n:n});

  var fillSolution = function(rows, currentBoard) {
    if (rows === n) {
      solutions.push(currentBoard);
      return;
    }
    for (var col = 0; col < n; col++) {
      currentBoard.togglePiece(rows, col);
      if (!currentBoard.hasAnyQueensConflicts()) {
        fillSolution(rows+1, currentBoard);
      }
      currentBoard.togglePiece(rows, col);
    }
  }

  fillSolution(0, board);
  return solutions.length;
};







