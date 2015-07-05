/**
* Object Constructor Extending Functionality
* @Author: K.C.Ashish Kumar
* @Version: 1.21
* @Support: http://www.ashishkumarkc.com
*/
var ObjectConstructorExtend = function (a) {
  return function (b) {
    var _o = {
    };
    for (var i in a) {
      if (a[i]) {
        _o[i] = a[i];
      }
    }
    for (var i in b) {
      if (b[i]) {
        _o[i] = b[i];
      }
    }
    var _cacheEmpty;
    if (typeof _o.empty === 'function') {
      _cacheEmpty = _o.empty;
    }
    _o.empty = function () {
      if (_cacheEmpty) {
        _cacheEmpty.call(_o);
      }
      for (var i in _o) {
        delete _o[i];
      }
      return _o;
    };
    if (!_cacheEmpty) {
      _o.empty.isPrivate = true;
    }
    _o.getKeys = function () {
      _o.getKeys.keyList = [
      ];
      for (var i in _o) {
        if (_o[i] && !_o[i].isPrivate) {
          _o.getKeys.keyList.push(i);
        }
      }
      return _o.getKeys.keyList;
    };
    _o.getKeys.isPrivate = true;
    if (typeof _o.initialize === 'function') {
      var _initialize = _o.initialize;
      _o.initialize = function () {
        if (!_o.initialize.invokedAlready) {
          _initialize.call(_o);
          _o.initialize.invokedAlready = true;
        } else {
          if (window.console && typeof window.console.log === 'function') {
            window.console.log('Initialize can be invoked only once . . .');
          }
        }
      };
      _o.initialize.call(_o);
    }
    return _o;
  };
};
/*------------------Usage Example------------------*/
var Emp = ObjectConstructorExtend({
  initialize: function () {
    alert('invoked initialize for ' + this.oData);
  },
  doProcess: function () {
    alert('Processed...' + this.oData);
  }
});
var e1 = new Emp({
  'oData': 'Ashish Kumar'
});
