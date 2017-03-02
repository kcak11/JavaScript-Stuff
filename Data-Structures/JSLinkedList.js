/************************************************************************

A simple JavaScript LinkedList implementation with operations like:

 - addItem
 - removeItem
 - insertAfter
 - traversal via iterator & next
 - traversal via traverseList with a callback function
 - contains

@Author: K.C.Ashish Kumar
Dt: 01/03/2017; Version: 1.2.1

(c) Ashish's Web - http://www.ashishkumarkc.com
License: https://kcak11.mit-license.org/

************************************************************************/

var LinkedList=function(){
	var _list;
	var _currentElem=null;
	var _firstElem;
	var _nextElem="unassigned";
	var _checkExists=function(ctx,elem){
		var exists=false;
		ctx.traverseList(function(e){
			if(exists){return;}
			if(e===elem){
				exists=true;
			}
		});
		return exists;
	};
	var _resetPointer=function(){
		_nextElem="unassigned";
	};
	var _next=function(returnWrapper){
		if(_nextElem==="unassigned"){
			_nextElem=_firstElem;
		}else{
			_nextElem=(_nextElem)?_nextElem._nextElem:null;
		}
		if(!returnWrapper){
			return (_nextElem && _nextElem._nextElem)?_nextElem._nextElem.element:null;
		}else{
			return (_nextElem && _nextElem._nextElem)?_nextElem._nextElem:null;
		}
	};
	this.addItem=function(elem){
		if(_checkExists(this,elem)){
			return;
		}
		var wrapper={};
		wrapper.element=elem;
		if(!_list){
			_list={};
			_firstElem=_list;
			_list._nextElem=wrapper;
		}else{
			_currentElem._nextElem=wrapper;
		}
		_currentElem=wrapper;
	};
	this.contains=function(elem){
		return _checkExists(this,elem);
	};
	this.iterator=function(){
		_resetPointer();
		return this;
	};
	this.next=function(){
		return _next(false);
	};
	this.removeItem=function(elem){
		var ref;
		_resetPointer();
		var loop=true;
		while(loop && (ref=_next(true))){
			if(ref && ref._nextElem && ref._nextElem.element===elem){
				ref._nextElem=ref._nextElem._nextElem;
				loop=false;
			}
		}
		_resetPointer();
		return elem;
	};
	this.insertAfter=function(elem,newElem){
		if(_checkExists(this,newElem)){
			return;
		}
		var ref;
		_resetPointer();
		var loop=true;
		var wrapper={};
		wrapper.element=newElem;
		while(loop && (ref=_next(true))){
			if(ref && ref.element===elem){
				var cacheRef=ref._nextElem;
				ref._nextElem=wrapper;
				wrapper._nextElem=cacheRef;
				loop=false;
			}
		}
		_resetPointer();
		return newElem;
	};
	this.traverseList=function(callback){
		if(!callback){
			return;
		}
		var cElem=_firstElem && _firstElem._nextElem;
		if(!cElem){
			return;
		}
		while(cElem && cElem.element){
			callback(cElem.element);
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

var myList=new LinkedList();

myList.addItem(elem1);
myList.addItem(elem2);
myList.addItem(elem3);
myList.addItem(elem4);
myList.addItem(elem5);

myList.traverseList(function(e){
	console.log("Via traverseList: ",e);
});

console.log("\n\n");
var itr=myList.iterator();
var obj;
while(obj=itr.next()){
	console.log("Via Iterator: ",obj);
}

console.log("\n\nAfter deletion of elem3");
myList.removeItem(elem3);
myList.traverseList(function(o){
	console.log(o);
});

console.log("\n\nAfter inserting new node {x:\"7\"} after elem4");
myList.insertAfter(elem4,{"x":"7"});
myList.traverseList(function(o){
	console.log(o);
});

console.log("\n\nList contains elem2: ",myList.contains(elem2));
