/**
* Highlight Layouts - A debug utility for highlighting layouts
* What id does: After passing in a selector and a highlight duration milliseconds,
* this utility will highlight the elements matched by selector and also print
* the corresponding selector in the console.

* Note: Recommended value for highlightDurationMillis is 2000 i.e. 2 seconds
*
* Current Version: 1.21
* Author: K.C.Ashish Kumar
* More Info: http://www.ashishkumarkc.com / http://m.ashishkumarkc.com
*
*/
(function () {
  window.highlightLayouts = function (selector, highlightDurationMillis) {
    if (!document.querySelectorAll) {
      if (window.console && window.console.log) {
        console.log.call(console, 'Please upgrade your browser. Utility not supported on older versions of browser');
      }
      return;
    }
    var elements = document.querySelectorAll(selector);
    var _hl = function (millis, ctr) {
      var win = this.ownerDocument.defaultView;
      var docElem = this.ownerDocument.documentElement;
      var ostyle = 'rgb(0,162,232) solid 5px';
      var s = win.getComputedStyle(this, null);
      var elemID = this.getAttribute('id');
      var elemClass = this.className;
      var sel = '';
      if (elemID) {
        sel += '#' + elemID;
      }
      if (elemClass) {
        sel += '.' + elemClass.split(' ').join('.');
      }
      var atts = this.attributes;
      if (atts) {
        for (var i = 0; i < atts.length; i++) {
          if (atts[i].nodeName !== 'class' && atts[i].nodeName !== 'id' && atts[i].nodeName !== 'style') {
            sel += '[' + atts[i].nodeName + '=\'' + atts[i].nodeValue + '\']';
          }
        }
      }
      osCache = {
      };
      osCache['outline-style'] = s['outline-style'];
      osCache['outline-color'] = s['outline-color'];
      osCache['outline-width'] = s['outline-width'];
      var _this = this;
      setTimeout(function () {
        _this.style.outline = ostyle;
        var top = _this.getBoundingClientRect().top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0);
        var left = _this.getBoundingClientRect().left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0);
        win.scrollTo(left - 11, top - 11);
        if (win.console && win.console.log) {
          try {
            win.console.log(sel);
          } catch (_) {
          }
        }
        setTimeout(function () {
          _this.style.outlineColor = osCache['outline-color'];
          _this.style.outlineWidth = osCache['outline-width'];
          _this.style.outlineStyle = osCache['outline-style'];
        }, millis);
      }, (millis * ctr));
    };
    for (var i = 0; i < elements.length; i++) {
      try {
        _hl.call(elements[i], highlightDurationMillis, i);
      } catch (__) {
        if (window.console && window.console.error) {
          console.error.call(console, __);
        }
      }
    }
  };
}());

/*Usage Example:*/
highlightLayouts('section[data-showview]', 2000);
