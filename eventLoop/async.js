"use strict";

const watch = require('./watch')(100, 100, true);
const _ = require('lodash');
const async = require('async');

let hugeArray = _.range(1000);

async.eachLimit(hugeArray, 10, (i, cb1) => {
  async.eachLimit(hugeArray, 10, (j, cb2) => {
    console.log(`item:${i}-${j}`);
    setImmediate(() => {
      return cb2();
    })
  }, () => {
    return cb1();
  });
});