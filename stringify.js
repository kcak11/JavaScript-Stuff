/**
Code Author: K.C.Ashish Kumar
*/
(function (w) {
  w._getString = function (o) {
    if (o === false || o === 0 || o === null) {
      return '' + o;
    }
    if(o === ''){
      return '\"\"';
    }
    if (!o || typeof o === 'function') {
      return undefined;
    }
    if(o.toString && typeof o.toString === "function" && o.toString()==="NaN"){
      return ''+null;
    }
    if (typeof o !== 'object') {
      return '' + o;
    }
    var res = '{';
    var isObjArray = false;
    if (o instanceof Array || (o.push && (o.length || o.length == 0))) {
      res = '[';
      isObjArray = true;
    }
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        var t = typeof o[i];
        switch (t) {
          case 'string':
            if (!isObjArray) {
              res += '"' + i + '":"' + o[i] + '",';
            } else {
              res += '"' + o[i] + '",';
            }
            break;
          case 'object':
            if (o[i] === null) {
              if (!isObjArray) {
                res += '"' + i + '":' + null + ',';
              } else {
                res += null + ',';
              }
            } else if (o[i].toJSON && typeof o[i].toJSON === 'function') {
              if (!isObjArray) {
                res += '"' + i + '":"' + o[i].toJSON() + '",';
              } else {
                res += '"' + o[i].toJSON() + '",';
              }
            } else if (o[i] instanceof Array || (o[i].push && (o[i].length || o[i].length == 0))) {
              if (!isObjArray) {
                res += '"' + i + '":[';
              } else {
                res += '[';
              }
              for (var j = 0; j < o[i].length; j++) {
                if (typeof o[i][j] === 'object') {
                  res += w._getString(o[i][j]);
                } else {
                  res += o[i][j] + ',';
                }
              }
              res += '],';
            } else {
              if (!isObjArray) {
                res += '"' + i + '":' + w._getString(o[i]) + ',';
              } else {
                res += w._getString(o[i]) + ',';
              }
            }
            break;
          case 'number':
          case 'boolean':
            if (!isObjArray) {
              res += '"' + i + '":' + o[i] + ',';
            } else {
              res += o[i] + ',';
            }
            break;
          case 'function':
          case 'undefined':
            break;
          default:
            break;
        }
      }
    }
    if (isObjArray) {
      res += '],';
    } else {
      res += '},';
    }
    res = res.replace(new RegExp(',]', 'g'), ']');
    res = res.replace(new RegExp(',}', 'g'), '}');
    return res;
  };
  w.stringify = function (o) {
    var result = w._getString(o);
    if (result === null || result === undefined) {
      return result;
    }
    result = result.replace(new RegExp(',]', 'g'), ']');
    result = result.replace(new RegExp(',}', 'g'), '}');
    result = result.replace(new RegExp(',,', 'g'), ',');
    if (result.lastIndexOf(',') == result.length - 1) {
      result = result.substring(0, result.length - 1);
    }
    return result;
  };
}(this));

/*USAGE:*/
var o={a:5,b:6,c:"5",d:[[5,6,0],[7,8,{"ashish":"kumar"}],[3,2,[4,5]]],e:{q:7,l:9,c:[3,4,5,{j:"ashish",q:[5,6,7,8,[[[{Q:"56",p:true}]]]]}]},f:true,g:false,h:null,i:new Date(),j:undefined,k:{j:[{m:[6,3]}]}};
var k=window.stringify(o);
console.log(k);
JSON.parse(k); /*Only for testing purpose*/
