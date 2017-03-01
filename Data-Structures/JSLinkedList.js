/*
A simple JavaScript Linked List example by K.C.Ashish Kumar
Dt: 01/03/2017
(c) Ashish's Web - http://www.ashishkumarkc.com
License: https://kcak11.mit-license.org/
*/

var LinkedList=function(){
	this.list;
	this.currentElem=null;
	
	this.addToLinkedList=function(elem){
		var wrapper={};
		wrapper.element=elem;
		if(!this.list){
			this.list={};
			this.firstElem=this.list;
			this.list._nextElem=wrapper;
		}else{
			this.currentElem._nextElem=wrapper;
		}
		this.currentElem=wrapper;
	};
	
	this.traverseList=function(callback){
		if(!callback){
			return;
		}
		var cElem=this.firstElem._nextElem;
		var traverse=true;
		callback(cElem.element);
		while(cElem && cElem._nextElem && traverse){
			callback(cElem._nextElem.element);
			if(cElem===cElem._nextElem){
				traverse=false;
			}
			cElem=cElem._nextElem;
		}
	};
		
};

/*Usage: Begins here*/

var elem1={"a":"1"};
var elem2={"b":"2"};
var elem3={"c":"3"};
var elem4={"d":"4"};
var elem5={"e":"5"};

var llist=new LinkedList();

llist.addToLinkedList(elem1);
llist.addToLinkedList(elem2);
llist.addToLinkedList(elem3);
llist.addToLinkedList(elem4);
llist.addToLinkedList(elem5);

llist.traverseList(function(e){
	console.log(e);
});
