"use strict";

const watch = require('./watch')(100, 100, true);
const _ = require('lodash');
const async = require('async');

let hugeArray = _.range(1000);

async.each(hugeArray, (i, cb1) => {
  async.each(hugeArray, (j, cb2) => {
    console.log(`item:${i}-${j}`);
    return cb2();
  }, () => {
    return cb1();
  });
});