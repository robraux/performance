"use strict";
const http = require('http');

const watch = require('./watch')(100, 10);

const _ = require('lodash');
const async = require('async');

function doGoodWork(callback) {
  let smallArray = _.range(200);

  async.each(smallArray, (i, cb) => {
    let j = 5 * i;
    let g = [1,2,3,4,5].splice(4);
    let a = '{"a":true,"b":true,"c":true,"d":true,"one":"foot","infrontof":"theother"}';
    let e = JSON.parse(a);
    return cb();
  }, () => {
    callback(null, "completed");
  });
}

http.createServer(function (req, res) {

  setTimeout(function() {
    doGoodWork((err, result) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(result);
      res.end();
    })
  }, 200);

}).listen(3000);