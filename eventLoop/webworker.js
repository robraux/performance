"use strict";

const watch = require('./watch')(100, 10);
const Worker = require('webworker-threads').Worker;

const async = require('async');

require('http').createServer(function (req,res) {

  const fibo = new Worker(function() {
    function fibo (n) {
      return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
    }
    this.onmessage = function (event) {
      postMessage(fibo(event.data));
    }
  });

  fibo.onmessage = function (event) {
    res.end('fib(40) = ' + event.data);
  };
  fibo.postMessage(40);
}).listen(3000);