/*
This is a work-in-progress.
*/
var glbspace = {
    waittime:500
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
      if (((new Date()).getTime() - glbspace.entry) > glbspace.waittime) {
        doAction();
      }
    }, (glbspace.waittime+11));
    glbspace.entry = (new Date()).getTime();
  }
}
