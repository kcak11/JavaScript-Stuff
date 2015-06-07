/**
* Author: Ashish
* Functionality: SpinButton Input
* 
* Implementation Version: 11.0
*/

var spinButton;
var buttonImagePath="pic/";

(function(){

var ieVersion=function(){
var nu=navigator.userAgent;
var cstr="MSIE ";
var ipos=nu.indexOf(cstr);
return parseInt(nu.substring(ipos+cstr.length));
};

var cssDef=[];
cssDef.push("div.sbCompContainer{position:relative;width:50px;height:22px;padding:0px;cursor:pointer;}\n");
cssDef.push("div.sbInputContainer{position:absolute;width:30px;height:22px;top:0px;left:0px;padding:0px;}\n");
cssDef.push("input.sbInputField{width:30px;height:18px;border:1px solid rgb(175,175,175);text-align:right;padding-right:5px;}\n");
cssDef.push("img.sbButtonCommon{padding:0px;}\n");
if(navigator.userAgent.indexOf("MSIE")!=-1){
	if(ieVersion()<9){
	cssDef.push("img.sbPlus{position:absolute;top:0px;left:37px;width:11px;height:11px;overflow:hidden;}\n");
	cssDef.push("img.sbMinus{position:absolute;top:11px;left:37px;width:11px;height:11px;overflow:hidden;}\n");
	}else{
	cssDef.push("img.sbPlus{position:absolute;top:0px;left:37px;width:11px;height:11px;overflow:hidden;}\n");
	cssDef.push("img.sbMinus{position:absolute;top:11px;left:37px;width:11px;height:11px;overflow:hidden;}\n");
	}
}else{
cssDef.push("img.sbPlus{position:absolute;top:0px;left:35px;width:11px;height:11px;overflow:hidden;}\n");
cssDef.push("img.sbMinus{position:absolute;top:11px;left:35px;width:11px;height:11px;overflow:hidden;}\n");
}




var spinButtonStyle=document.createElement("style");
var spinButtonStyleDef=document.createTextNode(cssDef.join(""));
spinButtonStyle.type="text/css";
if(spinButtonStyle.styleSheet){
spinButtonStyle.styleSheet.cssText=spinButtonStyleDef.nodeValue;
}else{
spinButtonStyle.appendChild(spinButtonStyleDef);
}
document.getElementsByTagName("head")[0].appendChild(spinButtonStyle);

var SpinButton=function(){
var max=99;
var min=1;

this.setMinValue=function(minValue){
	min=minValue;
};

this.setMaxValue=function(maxValue){
	max=maxValue;
};

var increment=function(el){
if(!el.value || el.value==0){
el.value=0;  /*Code Fix to ensure that when the value is null it defaults to 1 --> 0+1=1*/
}
var valueType="int";
if(el.value.indexOf(".")!=-1){
valueType="float";
}
if(valueType=="int"){
if(parseInt(el.value)<max){
el.value=parseInt(el.value,10)+1;
}
}else if(valueType=="float"){
if(parseFloat(el.value)<max){
el.value=parseFloat(el.value,10)+1;
}else{
el.value=max;
}
}
if(isNaN(el.value)){
el.value=min;
}
};

var decrement=function(el){
if((!el.value || el.value==0) && min!=0){
el.value=2;  /*Code Fix to ensure that when the value is null it defaults to 1 --> 2-1=1*/
}
var valueType="int";
if(el.value.indexOf(".")!=-1){
valueType="float";
}
if(valueType=="int"){
if(parseInt(el.value,10)>min){
el.value=parseInt(el.value)-1;
}
}else if(valueType=="float"){
if(parseFloat(el.value,10)>min){
el.value=parseFloat(el.value)-1;
}
}
if(isNaN(el.value)){
el.value=min;
}
};

var spinTimer=0;

/*Start Registering Event Handlers*/
this.registerEvents=function(spinID){
var spinElem=document.getElementById("sb_"+spinID);
var spinElemPlus=document.getElementById("plus_"+spinID);
var spinElemMinus=document.getElementById("minus_"+spinID);

spinElem.onkeydown=function(e){
if(!e){e=window.event;if(!e.which){e.which=e.keyCode;}}
var keyNum=e.which;
if(keyNum===38){ /*Up Key*/
increment(spinElem);
return true;
}else if(keyNum===40){  /*Down Key*/
decrement(spinElem);
return true;
}else if(keyNum===8 || keyNum===9 || keyNum===37 || keyNum===39 || keyNum===46 || keyNum===190 || keyNum===110){  /*Left Key, Tab Key, Right Key, BackSpace & Delete Key, decimal key(big keypad 190, numeric keypad 110)*/
return true;
}else if((keyNum>=48 && keyNum<=57) || (keyNum>=96 && keyNum<=105)){  /*Only Numeric Characters*/
return true;
}else if(keyNum==13){
eval("submitAction_"+spinID+"();");
return true;
}
return false;
};

spinElemPlus.onclick=function(e){
increment(spinElem);
};

spinElemMinus.onclick=function(e){
decrement(spinElem);
};

spinElemPlus.onmousedown=function(e){
window.clearInterval(spinTimer);
spinTimer=window.setInterval(function(){increment(spinElem);},200);
};

spinElemPlus.onmouseup=function(e){
window.clearInterval(spinTimer);
};

spinElemMinus.onmousedown=function(e){
window.clearInterval(spinTimer);
spinTimer=window.setInterval(function(){decrement(spinElem);},200);
};

spinElemMinus.onmouseup=function(e){
window.clearInterval(spinTimer);
};

};
/*End Registering Event Handlers*/

/*Start Component Creation*/
this.create=function(componentName,defaultValue,submitActionScript){
if(!defaultValue){
defaultValue=1;
}
componentID=((Math.random()*11).toString(36)+""+(Math.random()*11).toString(36)).split(".").join("");

var componentDef=[];
componentDef.push("<di"+"v class=\"sbCompContainer\">");
componentDef.push(" 	<di"+"v class=\"sbInputContainer\"><inp"+"ut type=\"text\" value=\""+defaultValue+"\" autocomplete=\"off\" class=\"sbInputField\" name=\""+componentName+"\" id=\"sb_"+componentID+"\"></di"+"v>");
componentDef.push(" 	<im"+"g id=\"plus_"+componentID+"\" src=\""+buttonImagePath+"spinplus.png\" class=\"sbPlus sbButtonCommon\"/>");
componentDef.push(" 	<im"+"g id=\"minus_"+componentID+"\" src=\""+buttonImagePath+"spinminus.png\" class=\"sbMinus sbButtonCommon\" />");
componentDef.push("</di"+"v>");
componentDef.push("<sc"+"ri"+"pt type=\"text/javascript\">");
componentDef.push("spinButton.registerEvents(\""+componentID+"\");");
componentDef.push("</sc"+"ri"+"pt>");
var componentUI=componentDef.join("");

document.open();
document.write(componentUI);
if(submitActionScript){
document.write("<scr"+"ipt type=\"text/javascript\">var submitAction_"+componentID+"=function(){"+submitActionScript+"};</scr"+"ipt>");
}else{
document.write("<scr"+"ipt type=\"text/javascript\">var submitAction_"+componentID+"=function(){};</scr"+"ipt>");
}
document.close();
return document.getElementById("sb_"+componentID);
};

/*End Component Creation*/

};

spinButton=new SpinButton();

})();