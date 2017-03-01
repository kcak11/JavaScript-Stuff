/*
A simple JavaScript Linked List example by K.C.Ashish Kumar
Dt: 01/03/2017
(c) Ashish's Web - http://www.ashishkumarkc.com
License: https://kcak11.mit-license.org/
*/
var llist;

var addToLinkedList=function(elem,nextElem){
	if(!llist){
		llist=elem;
	}
	if(!elem.getCurrentElem){
		elem.getCurrentElem=function(){return elem;};
	}
	elem.getNextElem=function(){
		nextElem.getCurrentElem=function(){return nextElem;};
		return nextElem;
	};
};

var traverseList=function(aList,callback){
	if(!aList || !callback){
		return;
	}
	var cElem=aList.getCurrentElem();
	var traverse=true;
	while(cElem && traverse){
		callback(cElem.getCurrentElem());
		cElem=cElem.getNextElem && cElem.getNextElem();
		if(cElem && cElem.getNextElem && !cElem.getNextElem()){
			traverse=false;
		}
	}
};
var elem1={"a":"1"};
var elem2={"b":"2"};
var elem3={"c":"3"};
var elem4={"d":"4"};
var elem5={"e":"5"};

addToLinkedList(elem1,elem2);
addToLinkedList(elem2,elem3);
addToLinkedList(elem3,elem4);
addToLinkedList(elem4,elem5);

traverseList(llist,function(e){
	console.log(e);
});
