/*
Text trimming logic
Author: K.C.Ashish Kumar
version: 1.331
*/
var ss=document.querySelectorAll("#mp-tfa")[0]; 
/*Element that contains the html markup. 
Choice of this element has to be made carefully so that it 'does not contain' any wrapper elements 
for the actual text.*/


var tmp=document.createElement("div");
var len=0;
var trimlength=397;
for(var i=0;i<ss.childNodes.length && len<trimlength;i++){
	len+=ss.childNodes[i].textContent.length;
	if(len<=trimlength){
		tmp.appendChild(ss.childNodes[i].cloneNode(true));
	}else{
		var result=ss.childNodes[i].textContent.substr(0,trimlength-tmp.textContent.length);
		result=result.substr(0,result.lastIndexOf(" "));
		tmp.appendChild(document.createTextNode(result));
	}
}
console.log(tmp.innerHTML); /*resultant html*/
