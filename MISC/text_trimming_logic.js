/*
Text trimming logic
*/
var ss=document.querySelectorAll("#mp-tfa")[0]; /*element that contains the html markup*/
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
