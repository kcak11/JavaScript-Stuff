/**
* Author: K.C.Ashish Kumar (CNC4)
* Functionality: Popup Component
* 
* Implementation Version: 11.0
*/

var screenOverlay;

(function(){
var picPath="pic/";
var layerID="OZLK3Nv07G5ZAJ9E3WQg9G1";
var scrollID="yQpH1TlFG3a1PwmG";
var layerZINDEX=11000;

var cssClasses=[];
cssClasses.push("<st"+"yle type=\"text/css\">");
cssClasses.push(".overlayDialog{position:absolute;top:99px;background-color:#ffffff;border:2px solid #ffffff;border-radius:5px;padding:11px;display:none;visibility:hidden;}");
cssClasses.push(".enableDuringPopup{}");
cssClasses.push(".cYgKVbruHoJ{width:1px;height:1px;overflow:hidden;}");
cssClasses.push(".vjIGDy1T1Ltjx{width:1px;height:1px;overflow:hidden;}");
cssClasses.push("</st"+"yle>");

var scrollControl=[];
scrollControl.push("<"+"div class=\"cYgKVbruHoJ\">");
scrollControl.push("<"+"form name=\"H1TlFG3a\" action=\"javascript:void(0);\">");
scrollControl.push("<input type=\"text\" id=\""+scrollID+"\" name=\""+scrollID+"\" class=\"vjIGDy1T1Ltjx\" />");
scrollControl.push("<"+"/"+"form"+">");
scrollControl.push("<"+"/"+"div"+">");

var layerInfo=[];
var bgImagePath="'"+picPath+"overlay-bg.png'";
layerInfo.push('<div style="display:none;position:absolute;top:0px;left:0px;background-image:url('+bgImagePath+');z-index:');  /*filter:alpha(opacity=50);opacity:0.50;  - Removed Temporarily*/
layerInfo.push(layerZINDEX);
layerInfo.push(';" id="');
layerInfo.push(layerID);
layerInfo.push('">&nbsp;</div>');

var ScreenOverlay=function(){
var layerElement;
this.init=function(){
document.open();
document.write(cssClasses.join(""));
document.write(scrollControl.join(""));
document.write(layerInfo.join(""));
document.close();
layerElement=document.getElementById(layerID);
};

var styleID="3890gu803u";
var hideElements=function(){
if(!document.getElementById(styleID)){
var ss=document.createElement("style");
var ct=document.createTextNode("select{visibility:hidden;}");
ss.type="text/css";
if(ss.styleSheet){
    ss.styleSheet.cssText = ct.nodeValue;
}else{
 ss.appendChild(ct);
}
ss.id=styleID;
document.getElementsByTagName("head")[0].appendChild(ss);
}
};

var showElements=function(){
if(document.getElementById(styleID)){
document.getElementById(styleID).parentNode.removeChild(document.getElementById(styleID));
}
};

var show=function(){
disableDocumentScrolling();
hideElements();
layerElement.style.width="100%";
layerElement.style.height=parseInt(getWindowHeight()+(screen.height*11))+"px";
layerElement.style.display="block";
};

var hide=function(){
layerElement.style.height=1+"px";
layerElement.style.display="none";
enableDocumentScrolling();
showElements();
};

var attachedComponent=false;
var interval=0;

/*Attach and show the UI Component which will reside upon the overlay*/
this.attach=function(elem){
if(!attachedComponent){
attachedComponent=true;
show();
try{var scrElem=document.getElementById(scrollID);scrElem.focus();setTimeout(function(){scrElem.blur();},121);}catch(scrollErr){/**/}
elem.style.zIndex=layerZINDEX+2;
elem.style.visibility="hidden";
elem.style.display="block";
window.clearInterval(interval);
var adjustLayoutCenter=function(){
elem.style.left=((((getWindowWidth()-parseInt(elem.offsetWidth))/2)>0)?((getWindowWidth()-parseInt(elem.offsetWidth))/2):0)+"px";
document.documentElement.scrollLeft=0;
document.documentElement.scrollTop=0;
document.getElementsByTagName("body")[0].scrollLeft=0;
document.getElementsByTagName("body")[0].scrollTop=0;
}
adjustLayoutCenter();
interval=window.setInterval(function(){adjustLayoutCenter();},121);
document.onkeydown=function(e){return check(e,elem);};
document.onkeyup=function(e){return check(e,elem);};
document.onkeypress=function(e){return check(e,elem);};
var selectBoxesWithinElem=elem.getElementsByTagName("select");
for(var s=0;s<selectBoxesWithinElem.length;s++){
if(selectBoxesWithinElem[s].className && selectBoxesWithinElem[s].className.indexOf("enableDuringPopup")!=-1){
selectBoxesWithinElem[s].style.visibility="visible";
}
}
window.setTimeout(function(){elem.style.visibility="visible";},100);
}
};

var check=function(e,elem){
if(!e){e=window.event;if(!e.target){e.target=e.srcElement;}}
if(e.target===elem){
return true;
}
var node=e.target.parentNode;
while(node!=null){
if(node===elem){
return true;
}
node=node.parentNode;
}
return false;
};

/*Dettach and hide the UI Component which is residing upon the overlay*/
this.dettach=function(elem){
if(attachedComponent){
attachedComponent=false;
elem.style.display="none";
hide();
window.clearInterval(interval);
document.onkeydown=null;
document.onkeyup=null;
document.onkeypress=null;
}
};

var disableDocumentScrolling=function(){
try{
document.documentElement.style.overflowX="hidden";
document.documentElement.style.overflowY="hidden";
}catch(serr){/**/}
try{
document.body.style.overflowX="hidden";
document.body.style.overflowY="hidden";
}catch(serr){/**/}
};

var enableDocumentScrolling=function(){
if(navigator.userAgent.indexOf("MSIE 6")!=-1){
	try{
	document.documentElement.style.overflowX="hidden";
	document.documentElement.style.overflowY="";
	}catch(serr){/**/}
	try{
	document.body.style.overflowX="hidden";
	document.body.style.overflowY="";
	}catch(serr){/**/}
}else{
	try{
	document.documentElement.style.overflowX="hidden";
	document.documentElement.style.overflowY="auto";
	}catch(serr){/**/}
	try{
	document.body.style.overflowX="hidden";
	document.body.style.overflowY="auto";
	}catch(serr){/**/}
}
};

var getWindowWidth=function(){
try{
return $(window).width();
}catch(jqErr){
var wa=[];
wa.push((window.innerWidth)?window.innerWidth:0);
wa.push((document.documentElement)?document.documentElement.clientWidth:0);
wa.push((document.body)?document.body.clientWidth:0);
wa.sort(cnum);
for(var i=0;i<wa.length;i++){
if(wa[i]>0){
return wa[i];
}
}
return 0;
}
};

var cnum=function(a,b){return a-b;}; /*Comparator for Ascending Sort. For Descending sort, return b-a */

var getWindowHeight=function(){
try{
return $(window).height();
}catch(jqErr){
var ha=[];
ha.push((window.innerHeight)?window.innerHeight:0);
ha.push((document.body)?document.body.clientHeight:0);
ha.push((document.documentElement)?document.documentElement.clientHeight:0);
ha.sort(cnum);
for(var i=0;i<ha.length;i++){
if(ha[i]>0){
return ha[i];
}
}
return 0;
}
};

};

screenOverlay=new ScreenOverlay();
screenOverlay.init();
})();