"use strict";

/**
 * @param interval interval of the checks performed. Default: 100 ms
 * @param threshold max time allowed to elapse or we report. Default: 100 ms
 * @param debug should we report when we check the event loop
 */

module.exports = function(interval = 100, threshold = 100, debug = false) {

  let lastTime = process.hrtime();

  const isAliveTick = function() {

    if(debug) {
      console.log("checked:" + Date.now());
    }

    let diff = process.hrtime(lastTime);

    //convert to ms
    diff = diff[0] * 1e3 + diff[1] *1e-6;

    if ((diff - interval) >= threshold) {
      console.log('Event queue locked for up to ' + (diff - interval) + ' ms');
      // do your logging here;
    }

    lastTime = process.hrtime();
    return setTimeout(isAliveTick, interval);
  }

  // start the alive checking
  isAliveTick();
}