"use strict";

const watch = require('./watch')(100, 100);

const _ = require('lodash');

let hugeArray = _.range(1000);
let smallArray = _.range(100);

for (let i in hugeArray) {
  for (let j in hugeArray) {
    console.log(`item:${i}-${j}`);
  }
}

