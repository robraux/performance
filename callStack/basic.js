"use strict";

function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    // call stack overflow
    return 1;
  }
}
console.log(computeMaxCallStackSize());


// node --v8-options | grep -B0 -A1 stack_size
// node --stack-size=1300
