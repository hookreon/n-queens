/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting




// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.
window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solutions = [];

  var recurse = function(row){
    var keepGoing = true;
    if(row === n) {
      solutions = board.allRows();
      return false;
    }

    for(var i = 0; i < n; i++) {
      board.setPiece(row, i, 1);
      if(!board.hasAnyRooksConflicts()) {
        keepGoing = recurse(row + 1);
      }
      if(!keepGoing) {
        return false;
      }
      board.setPiece(row, i, 0);
    }
    return true;
  }
  recurse(0);
  return solutions;
};

// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  var recurse = function(row){
    var keepGoing = true;
    if(row === n) {
      solutionCount++;
      return true;
    }

    for(var i = 0; i < n; i++) {
      board.setPiece(row, i, 1);
      if(!board.hasAnyRooksConflicts()) {
        keepGoing = recurse(row + 1);
      }
      if(!keepGoing) {
        return false;
      }
      board.setPiece(row, i, 0);
    }
    return true;
  }
  recurse(0);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solutions = board.allRows();

  var recurse = function(row){
    var keepGoing = true;
    if(row === n) {
      solutions = board.allRows();
      return false;
    }

    for(var i = 0; i < n; i++) {
      board.setPiece(row, i, 1);
      if(!board.hasAnyQueensConflicts()) {
        keepGoing = recurse(row + 1);
      }
      if(!keepGoing) {
        return false;
      }
      board.setPiece(row, i, 0);
    }
    return true;
  }
  recurse(0);
  return solutions;
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  var recurse = function(row){
    var keepGoing = true;
    if(row === n) {
      solutionCount++;
      return true;
    }

    for(var i = 0; i < n; i++) {
      board.setPiece(row, i, 1);
      if(!board.hasAnyQueensConflicts()) {
        keepGoing = recurse(row + 1);
      }
      if(!keepGoing) {
        return false;
      }
      board.setPiece(row, i, 0);
    }
    return true;
  }
  recurse(0);
  return solutionCount;
};
