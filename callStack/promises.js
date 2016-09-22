"use strict";

const Promise = require('bluebird');

function computeMaxCallStackSize() {
  return new Promise(function (resolve, reject) {

    computeMaxCallStackSize().then(function(result) {
      resolve(1 + result);
    }).catch(function(err) {
      resolve(1);
    })
  });
}
computeMaxCallStackSize().then(function(max) {
  console.log(`max call size: ${max}`);
})