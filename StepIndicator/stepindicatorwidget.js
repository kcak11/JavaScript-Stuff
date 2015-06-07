/***************************************************************************************/
/* JavaScript StepIndicator                                                            */
/* Project: ER96                                                                       */
/* Code Author: Ashish (CNC4)                                                          */
/* Version: 2.11                                                                       */
/* Browser Compatibility: IE6, IE7, IE8, IE9, Firefox 2, 3, 4, Google Chrome           */
/***************************************************************************************/
(function(){
var StepIndicator=function(){
var stepImagePath="pic/";
var stepImage;
var cssStepIndicatorDef=[];
cssStepIndicatorDef.push(".activeStep{color:rgb(255,255,255);}");
cssStepIndicatorDef.push(".visitedStep{color:rgb(185,227,182);}");
cssStepIndicatorDef.push(".nonVisitedStep{color:rgb(167,167,167);}");
var styleElem=document.createElement("style");
styleElem.type="text/css";
var cssDef=document.createTextNode(cssStepIndicatorDef.join("\n"));
if(styleElem.styleSheet){
styleElem.styleSheet.cssText=cssDef.nodeValue;
}else{
styleElem.appendChild(cssDef);
}
document.getElementsByTagName("head")[0].appendChild(styleElem);
var applyCssDef4_4={
"1":["activeStep","nonVisitedStep","nonVisitedStep","nonVisitedStep"],
"2":["visitedStep","activeStep","nonVisitedStep","nonVisitedStep"],
"3":["visitedStep","visitedStep","activeStep","nonVisitedStep"],
"4":["visitedStep","visitedStep","visitedStep","activeStep"]
};
var applyCssDef4_3={
"1":["activeStep","nonVisitedStep","nonVisitedStep","nonVisitedStep"],
"2":["visitedStep","activeStep","nonVisitedStep","nonVisitedStep"],
"3":["visitedStep","visitedStep","nonVisitedStep","activeStep"]
};
var stepType3Def=[];
stepType3Def.push(0);
stepType3Def.push(33);
stepType3Def.push(66);
var stepType4Def=[];
stepType4Def.push(0);
stepType4Def.push(33);
stepType4Def.push(66);
stepType4Def.push(99);
var getProperDecodedString=function(argument){
var a=argument;
while(a.indexOf("+")!=-1){
a=a.replace("+","%20");
}
var b=decodeURIComponent(a);
return b;
};
var stepindicator_text_step4_1=getProperDecodedString('1.+Inhoud');
var stepindicator_text_step4_2=getProperDecodedString('2.+Levering');
var stepindicator_text_step4_3=getProperDecodedString('3.+Betaling');
var stepindicator_text_step4_4=getProperDecodedString('4.+Bevestiging');
var stepLayoutID="peK49nojQIAAAQIECBAgQIAAgTUU6L";
this.activeStep=function(stepType,stepID){
var stepPos;
var stepCssArray;
if(stepType===3){
stepImage=stepImagePath+"4steps_cp.png";
stepPos=stepType3Def[parseInt((stepID-1),10)]*-1;
stepCssArray=applyCssDef4_3;
}else{
stepImage=stepImagePath+"4steps_hd.png";
stepPos=stepType4Def[parseInt((stepID-1),10)]*-1;
stepCssArray=applyCssDef4_4;
}
var stepLayout=[];
stepLayout.push("<"+"div id=\""+stepLayoutID+"\" style=\"position:relative;width:726px;height:33px;border:none;overflow:hidden;background-image:url('"+stepImage+"');background-repeat:no-repeat;background-position:0px "+stepPos+"px;\">");
stepLayout.push("<span class=\""+stepCssArray[stepID][0]+"\" style=\"position:absolute;top:8px;left:33px;font-family:Verdana;font-weight:bold;\">"+stepindicator_text_step4_1+"</span>");
stepLayout.push("<span class=\""+stepCssArray[stepID][1]+"\" style=\"position:absolute;top:8px;left:220px;font-family:Verdana;font-weight:bold;\">"+stepindicator_text_step4_2+"</span>");
stepLayout.push("<span class=\""+stepCssArray[stepID][2]+"\" style=\"position:absolute;top:8px;left:400px;font-family:Verdana;font-weight:bold;\">"+stepindicator_text_step4_3+"</span>");
stepLayout.push("<span class=\""+stepCssArray[stepID][3]+"\" style=\"position:absolute;top:8px;left:580px;font-family:Verdana;font-weight:bold;\">"+stepindicator_text_step4_4+"</span>");
stepLayout.push("<"+"/"+"div"+">");
document.open("text/html","replace");
document.write(stepLayout.join(""));
document.close();
};
}; /*end of constructor*/
window.stepIndicator=new StepIndicator();  /*Defining a globally accessible property*/
})(window);
