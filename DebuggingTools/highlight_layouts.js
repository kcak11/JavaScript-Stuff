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
    var elements = document.querySelectorAll(selector);
    var callstack = [
    ];
    var _hl = function (millis, ctr) {
      var _body = this.ownerDocument.getElementsByTagName('body') [0];
      var ostyle = 'rgb(0,162,232) solid 5px';
      var s = this.ownerDocument.defaultView.getComputedStyle(this, null);
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
        var top = _this.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        var left = _this.getBoundingClientRect().left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
        _body.scrollTop = top - 11;
        _body.scrollLeft = left - 11;
        if (window.console && window.console.log) {
          try {
            window.console.log(sel);
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
        (window.console && window.console.error) ? console.error.call(console, __)  : void (0);
      }
    }
  };
}());
/*Usage Example:*/
highlightLayouts('section[data-showview]', 2000);
