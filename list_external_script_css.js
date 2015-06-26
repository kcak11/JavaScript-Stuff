/**
* Utility to list all the external scripts and css loaded in a page
*/
javascript: (function () {
  var scr = document.querySelectorAll('script[src], link[rel=stylesheet][href]');
  scr.sources = [
  ];
  scr.sources.push('External Scripts & CSS on This Page:<br/><ul>');
  for (var i = 0; i < scr.length; i++) {
    var t = scr[i].src ? scr[i].src : scr[i].href;
    var c = scr[i].src ? 'rgb(252,214,216)' : 'rgb(174,255,194)';
    scr.sources.push('<li style="margin:11px;display:block;background-color: ' + c + ';"><a href="' + t + '" target="_blank">' + t + '</a></li>');
  }
  scr.sources.push('</ul>');
  var rWin = window.open('', 'rWin_' + Math.random(), 'width=' + (screen.width - 121) + ',height=' + (screen.height - 121) + ',top=22,left=22,scrollbars=yes');
  setTimeout(function () {
    rWin.document.open('text/html', 'replace');
    rWin.document.write(scr.sources.join(''));
    rWin.document.close();
    rWin.document.title = 'External Scripts & CSS List';
  }, 121);
}());
