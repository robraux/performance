'use strict';

const http = require('http');
const url = require('url');

// require('./uncaught');

let counter = 0;

http.createServer(function (req, res) {
  let reqNumber = counter;
  console.log(`server request: ${reqNumber}`);
  const uri = url.parse(req.url).pathname;

  if(uri === '/exception') {
    let that = whoops.slice();
  }
  if(uri === '/rejection') {
    let resource = new SomeResource();
  }

  setTimeout(function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(uri);
    res.end();
    console.log(`end request: ${reqNumber}`);
  }, 5000)

  counter++;

}).listen(3000);


// setup a promise we can reject and not handle
function SomeResource() {
  // Initially set the loaded status to a rejected promise
  this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
}
