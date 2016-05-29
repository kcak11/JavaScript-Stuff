/**
Utility for Simulating Events
*/
(function () {
  /*Event Simulator*/
  window.eventFire = function (el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      try {
        var event = new Event(etype, {
          'view': window,
          'bubbles': true,
          'cancelable': false
        });
        el.dispatchEvent(event);
      } catch (_) {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
      }
    }
  };
  /*Usage Example:*/
  /*
  var t = document.createDocumentFragment();
  var te = document.createElement('div');
  te.innerHTML = '<div id="testElement" onclick="alert(\'You Clicked\');" onmousedown="alert(\'You did a mousedown\');" onmouseup="alert(\'You did a mouseup\');"></div>';
  t.appendChild(te);
  eventFire(t.querySelectorAll('#testElement') [0], 'click');
  eventFire(t.querySelectorAll('#testElement') [0], 'mouseup');
  eventFire(t.querySelectorAll('#testElement') [0], 'mousedown');
  */
}());
