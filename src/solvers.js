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
  
  var board = new Board({n:n});
  

  var fillSolution = function(rows, currentBoard) {
    if (rows === n) {
      return currentBoard;
    }
    for (var col = 0; col < n; col++) {
      currentBoard.togglePiece(rows, col);
      if (!currentBoard.hasAnyQueensConflicts()) {
        var result = fillSolution(rows+1, currentBoard);
        if (result) {
          return result;
        }
      }
      currentBoard.togglePiece(rows, col);
    }
  }

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var solution = fillSolution(0, board);
  return solution.rows();
  
  
  /*
  if (n === 0) {
      return [];
    }
    // initialize an empty board
    var empty = [];
    for (var i = 0; i < n; i++) {
      empty.push([]);
      for (var j = 0; j < n; j++) {
        empty[i].push(0);
      }
    }
    var solutions = [];
    // recursive function that inputs the current board and a row number
    var solver = function(currentBoard, row) {
      // if row equals n then push the current board onto solution array
      if (solutions.length > 0) {
        return;
      }
      if (row === n) {
        solutions.push(JSON.parse(JSON.stringify(currentBoard.rows())));
      } else {
        for (var i = 0; i < n; i++) {
          currentBoard.get(row)[i] = 1;
          if (!currentBoard.hasAnyQueensConflicts()) {
            solver(currentBoard, row + 1);
          }
          currentBoard.get(row)[i] = 0;
        }
      }
    };
    solver(new Board({n: n}), 0);
    return (solutions.length === 0) ? empty : solutions[0];
  */
  
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







