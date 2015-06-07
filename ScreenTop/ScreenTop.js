(function(_glb){
var elid="jls793yhyio4emh490uhFIELD";
var delid="io4emh490uhDIV";
var doc=window.document;

var initScript=function(){
var f=doc.createElement("form");
var i=doc.createElement("input");
var d=doc.createElement("div");

i.id=elid;
i.style.width="1px";
i.style.height="1px";
i.style.overflow="hidden";

d.id=delid;
d.style.width="1px";
d.style.height="1px";
d.style.overflow="hidden";
d.style.position="absolute";
d.style.top="0px";
d.style.left="0px";

f.appendChild(i);
d.appendChild(f);
try{
doc.getElementsByTagName("body")[0].insertBefore(d,doc.getElementsByTagName("body")[0].getElementsByTagName("*")[0]);
}catch(err){
setTimeout(function(){doc.getElementsByTagName("body")[0].insertBefore(d,doc.getElementsByTagName("body")[0].getElementsByTagName("*")[0]);},500);
}
return "gotoTopOfScreen();";
};

window.gotoTopOfScreen=function(){
try{
doc.getElementById(elid).focus();
setTimeout(function(){doc.getElementById(elid).blur();setTimeout(function(){doc.getElementById(delid).style.display="none";},100);},200);
}catch(err){setTimeout(function(){window.gotoTopOfScreen();},500);}
};

Function(initScript())();
})(window);