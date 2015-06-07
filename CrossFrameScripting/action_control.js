/**
* CROSS FRAME SCRIPTING - CODE
* AUTHOR: Ashish CNC4
* Implementation Version: 11.0
* 
*
* USage Details:
*
* 1. Create a JSON Structure with Key (Function Name), Value (Functions Definition)
* eg: var myjson={"method1":function(){}, "method2":function(){}};
* 2. Initialize the Listener as follows:
* actionController.setActionGroupID(<actionGroupID>); // <actionGroupID> a Unique String Identifier (eg: "w3uonvosl")
* actionController.listen(jsonStructure);  // jsonStructure created in Step 1 (eg: myjson)
*
*
* In the destination Frame trigger the functions in the jsonStructure as follows:
* 1. action.setActionGroupID(<actionGroupID>); // <actionGroupID> a Unique String Identifier (Should be same as created earlier)
* 2. action.trigger(<key>); // key: The function name in the jsonStructure which was created earlier (eg: "method1")
*/

(function(_glb){
var actionPrefix="APPACTION_";

var reset=function(actionStr){
var rDate=new Date();
rDate.setTime(rDate.getTime()-(24*60*60*1000));
var allcookies=document.cookie.split(";");
var key;
for(var i=0;i<allcookies.length;i++){
if(allcookies[i].split("=")[0].indexOf(actionPrefix+actionStr)!=-1){
key=allcookies[i].split("=")[0];
document.cookie=key+"=NOVALUE;expires="+rDate.toGMTString()+";path=/";
}
}
};

var ActionController=function(){
var listenerID=0;
var CLOOP=true; 
var actionStr="";
var actionDef={};

reset(actionStr);

this.setActionGroupID=function(actionGroupID){
actionStr=actionGroupID;
reset(actionStr);
};

this.listen=function(actionDefinition){
actionDef=actionDefinition;
reset(actionStr);
window.clearInterval(listenerID);
listenerID=window.setInterval(function(){startListening();},121);
};

var startListening=function(){
if(document.cookie.indexOf(actionPrefix+actionStr)!=-1){
CLOOP=true;
for(var ad in actionDef){
if(document.cookie.indexOf(actionPrefix+actionStr+ad)!=-1 && CLOOP){
reset(actionStr);
actionDef[ad]();
CLOOP=false;
}
}
}
};

};

var ActionInvoker=function(){

var actionStr="";

this.setActionGroupID=function(actionGroupID){
actionStr=actionGroupID;
};

this.trigger=function(actionCode){
reset(actionStr);
document.cookie=actionPrefix+actionStr+actionCode+"=true;path=/";
};

};

_glb.actionController=new ActionController();
_glb.action=new ActionInvoker();

})(window);