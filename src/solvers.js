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
  var board = new Board({n:n})
  var rooks = 0;
  var trackedRooks;
  var solution = [];


  // for (i = 0; i < n; i++){
  //   for (j = 0; j < n; j++){
  //     board.setPiece(i, j, 1);
  //     if (!board.hasColConflictAt(j)){

  //     }

  //     board.setPiece(i, j, 0);
  //   }
  // }
  // return board.allRows;

  //set up recursive function
  var recurse = function(){
    //base case
    if (rooks === n) {
      //loop through board all rows
      _.each(board.allRows(), function(row) {
        solution.push(row);
      });
      return;
    }

    //loop through row
//   for (var i=0; i < n; i++) {
      //loop through col
      for(var j = 0; j < n; j++) {
        board.setPiece(rooks, j, 1);
        //increment rooks
        rooks++;
        if(board.hasAnyRooksConflicts()) {
          board.setPiece(i, j, 0);
          //increment rooks
          rooks--;
        }
      }
      recurse(board.allRows(rooks));
    //}
  }
  recurse(board.allRows(0));
  return solution;


  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
  ///maybe add later arrays to keep track of already used columns?
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
