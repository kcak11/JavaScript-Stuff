/*
This is a work-in-progress.
*/
var glbspace = {
};
var doAction = function () {
  console.log('Executed . . .' + Math.random());
}
window.onresize = function () {
  if (!glbspace.entry) {
    doAction();
    glbspace.entry = (new Date()).getTime();
  } else {
    setTimeout(function () {
      if (((new Date()).getTime() - glbspace.entry) > 500) {
        doAction();
      }
    }, 511);
    glbspace.entry = (new Date()).getTime();
  }
}
