/**
* Utility to compute the highest z-index value in a HTML DOM
*
* Usage Example:
* Invoke var highestZIndex=getMaxLayerValue();
* highestZIndex will contain the highest value of z-index
*
* Author:  K.C.Ashish Kumar
* Version: 1.21
* 
* Visit:   http://www.ashishkumarkc.com
*/
window.getMaxLayerValue = function () {
  var f;
  var l = [
  ];
  if (window.getComputedStyle) {
    f = function (a) {
      var k = a.ownerDocument.defaultView.getComputedStyle(a, null) ['z-index'];
      if (!isNaN(k)) {
        l.push(k);
      }
    };
  } else {
    f = function (a) {
      if (a.currentStyle) {
        var k = a.currentStyle['z-index'];
        if (!isNaN(k)) {
          l.push(k);
        }
      }
    };
  }
  var all = document.getElementsByTagName('body') [0].getElementsByTagName('*');
  for (var i = 0; i < all.length; i++) {
    f(all[i]);
  }
  return Math.max.apply(null, l);
};
