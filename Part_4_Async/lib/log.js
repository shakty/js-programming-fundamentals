////////////////////////////////////////
// Some simple functions for logging. //
////////////////////////////////////////

module.exports = function(doAsync, doSilly, doExit) {

  let actionCounter = 0;

  function log(txt) {
    console.log("    " + txt);
  }

  function logCounter(txt) {
    console.log(++actionCounter, txt);
  }

  function err(txt) {
    txt = "Aaaah!!! " + txt;
    log(txt);
    if (doExit) quit();
  }

  function quit() {
    console.log("\nI cannot go on like this...\n");
    process.exit(-1);
  }

  return { log, logCounter, err };
};
