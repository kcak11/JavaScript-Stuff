(function(){

var storage="";

function restoreValues(fieldArray){
if(!fieldArray || fieldArray.length==0){
return -1;
}
for(var i=0;i<fieldArray.length;i++){

/*
if(navigator.userAgent.indexOf("MSIE")==-1){
document.getElementById(fieldArray[i]).addEventListener("focus",fieldValueFocusAction,false);
}else{
document.getElementById(fieldArray[i]).attachEvent("onfocus",fieldValueFocusAction);
}
*/

if(navigator.userAgent.indexOf("MSIE")==-1){
document.getElementById(fieldArray[i]).addEventListener("keydown",fieldValueFocusAction,false);
}else{
document.getElementById(fieldArray[i]).attachEvent("onkeydown",fieldValueFocusAction);
}

if(navigator.userAgent.indexOf("MSIE")==-1){
document.getElementById(fieldArray[i]).addEventListener("click",fieldValueFocusAction,false);
}else{
document.getElementById(fieldArray[i]).attachEvent("onclick",fieldValueFocusAction);
}

if(navigator.userAgent.indexOf("MSIE")==-1){
document.getElementById(fieldArray[i]).addEventListener("blur",fieldValueBlurAction,false);
}else{
document.getElementById(fieldArray[i]).attachEvent("onblur",fieldValueBlurAction);
}
if(navigator.userAgent.indexOf("MSIE")==-1){
	document.getElementById(fieldArray[i]).addEventListener("focus",fieldValueFocusAction,false);
	}else{
		document.getElementById(fieldArray[i]).attachEvent("onactivate",fieldValueFocusAction);

	}

}

}

function fieldValueFocusAction(){
var elem;
if(navigator.userAgent.indexOf("MSIE")==-1){
elem=this;
}else{
elem=window.event.srcElement;
}
if(decodeURIComponent(storage[elem.id])==elem.value){
elem.value="";
}
}

function fieldValueBlurAction(){
var elem;
if(navigator.userAgent.indexOf("MSIE")==-1){
elem=this;
}else{
elem=window.event.srcElement;
}
if(elem.value==""){
elem.value=decodeURIComponent(storage[elem.id]);
}
}





window.bindInputFields=function(fieldArray){
if(!fieldArray || fieldArray.length==0){
return -1;
}
var s=[];
s.push("{");
for(var i=0;i<fieldArray.length;i++){
s.push("\""+fieldArray[i]+"\":\"");
s.push(encodeURIComponent(document.getElementById(fieldArray[i]).value));
s.push("\"");
if(i<(fieldArray.length-1)){
s.push(",");
}
}
s.push("}");
storage=Function("return "+s.join("")+";")();
restoreValues(fieldArray);
};

window.unbindInputField=function(fieldID){
storage[fieldID]="";
};

})(window);