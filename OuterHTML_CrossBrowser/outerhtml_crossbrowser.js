/**
    @Author: K.C.Ashish Kumar
    @ContactInfo: http://www.ashishkumarkc.com
    
    This API can be used as a cross-browser 
    utility for getting the outerHTML of an
    element.
    
    An optional parameter tagOnly can be passed
    as true i.e. getOuterHTML(true) indicating
    that only the tag string is returned and not
    the entire contents.
    
    The utility is not supported for the following
    3 elements:
    1. HTML
    2. HEAD
    3. BODY
    
    For all other unsupported elements (DocumentFragment)
    or Non Node Objects, the utility returns undefined 
*/
Object.prototype.getOuterHTML = function (tagOnly) {
  if (this.ownerDocument && this.ownerDocument.documentElement && this.ownerDocument.documentElement.tagName) {
    var tag = this.tagName.toLowerCase();
    if (tag === 'html' || tag === 'head' || tag === 'body') {
      return 'OPERATION_NOT_SUPPORTED_FOR_' + tag.toUpperCase() + '_ELEMENT';
    } else {
      var divId = 'temp_outer_html_div';
      var cont = document.getElementById(divId);
      if (!cont) {
        var ohdiv = document.createElement('div');
        ohdiv.id = divId;
        ohdiv.style.display = 'none';
        ohdiv.style.visibility = 'hidden';
        ohdiv.innerHTML = '';
        document.getElementsByTagName('body') [0].appendChild(ohdiv);
        cont = document.getElementById(divId);
      } else {
        cont.innerHTML = '';
      }
      cont.appendChild(this.cloneNode(true));
      var retVal = cont.innerHTML;
      cont.innerHTML = '';
      if (tagOnly) {
        retVal = retVal.substring(0, retVal.indexOf('>') + 1);
      }
      return retVal;
    }
  } else {
    return;
  }
};
