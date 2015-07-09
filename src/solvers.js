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


  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  ///maybe add later arrays to keep track of already used columns?
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var rooks = 0;
  var solutionCount = 0;


  //set up recursive function
  // var recurse = function(board){
  //   if (rooks === n) {
  //     _.each(board.allRows(), function(rowarray) {
  //       solution.push(rowarray);
  //     });
  //     return;
  //   }


  var recurse = function(board, currentrow, currentcol){
    if(rooks === n) {
      solutionCount++;
    }

    for (var i = currentrow; i < n; i++) {
      for(var j = currentcol; j < n; j++) {
          board.setPiece(i, j, 1);
          rooks++;
        if(!board.hasAnyRooksConflicts()) {

          recurse(board, i, j);
        }
        // if (board.hasAnyRooksConflicts()) {
          board.setPiece(i, j, 0);
          rooks--;
        // }
      }
    }
  }
  recurse(board, 0, 0);


  //   var board = new Board({n:n});
  // var rooks = 0;
  // var trackedRooks;
  // var solution = [];

  // //set up recursive function
  // var recurse = function(){
  //   if (rooks === n) {
  //     _.each(board.allRows(), function(row) {
  //       solution.push(row);
  //     });
  //     return;
  //   }

  //   for (var i=0; i < n; i++) {
  //     for(var j = 0; j < n; j++) {
  //         board.setPiece(i, j, 1);
  //         rooks++;
  //       if(!board.hasAnyRooksConflicts()) {
  //         recurse(board);

  //       }
  //         board.setPiece(i, j, 0);
  //         rooks--;

  //     }
  //   }
  // }
  // recurse(board);
  // return solution;

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
