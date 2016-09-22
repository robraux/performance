"use strict";
const http = require('http');

const watch = require('./watch')(100, 10);

const _ = require('lodash');

function doGoodWork() {
  let smallArray = _.range(200);

  for (let i in smallArray) {
    let j = 5 * i;
    let g = [1,2,3,4,5].splice(4);
    let a = '{"a":true,"b":true,"c":true,"d":true,"one":"foot","infrontof":"theother"}';
    let e = JSON.parse(a);

  }
  return "completed";
}

http.createServer(function (req, res) {

  setTimeout(function() {
    let work = doGoodWork()
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(work);
    res.end();
  }, 200)

}).listen(3000);