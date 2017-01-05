"use strict";

const _ = require('lodash');
const async = require('async');

const hugeArray = _.range(5000);

async.eachSeries(hugeArray, function iteratee(item, callback) {

  console.log(require('stack-trace').get().length);

  if (item % 2 === 0) {
    setImmediate(() => {
      callback(null, item);
    })
  } else {
    nextLoop(item, callback);
  }

}, function done() {
  console.log("done");
});

function nextLoop(item, callback) {
  callback(null, item);
}