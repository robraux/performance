"use strict";


function factorial(n) {
  function recur(n, acc) {
    console.log(require('stack-trace').get().length);

    return n === 0 ? acc : recur(n-1, n*acc);
  }

  return recur(n, 1);
}

console.log(factorial(20000));

// -- harmony