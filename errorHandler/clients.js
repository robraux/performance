'use strict';

const async = require('async');
const request = require('request');

const numberOfRequests = 5;

async.times(numberOfRequests, function(n, next) {
  console.log(`client request: ${n}`);
  request('http://localhost:3000', function (error, response, body) {
    if(error) {
      console.log(`error on ${n}`);
    } else {
      console.log(`success on ${n}`);
    }
    return next();
  })
});
