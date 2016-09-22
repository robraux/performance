/**
 Attempting to resume normally after an uncaught exception
 is akin to pull the power cord when upgrading a computer --
 nine out of ten times nothing happens - but the 10th time you're screwed.
**/

process.on('uncaughtException', (err) => {
  console.error('Houston, we have a problem -- log this somewhere safe and fix it ASAP!!!!');
  console.error(err.stack);
  process.exit(-1);
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
  // much more a gray area than uncaughtException
});

