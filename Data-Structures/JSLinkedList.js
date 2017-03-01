/**************
A simple JavaScript Linked List example by K.C.Ashish Kumar
with 
 - addItem
 - removeItem
 - insertAfter
 - iterator & next
 - traverseList with a callback function

Dt: 01/03/2017; Version: 1.2.1

(c) Ashish's Web - http://www.ashishkumarkc.com
License: https://kcak11.mit-license.org/
*************/

var LinkedList=function(){
	var _list;
	var _currentElem=null;
	var _firstElem;
	var _nextElem="unassigned";
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
	_checkExists=function(ctx,elem){
		var exists=false;
		ctx.traverseList(function(e){
			if(exists){return;}
			if(e===elem){
				exists=true;
			}
		});
		return exists;
	};
	this.iterator=function(){
		_nextElem="unassigned";
		return this;
	};
	this.next=function(returnWrapper){
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
	this.removeItem=function(elem){
		var ref;
		var list=this.iterator();
		var loop=true;
		while(loop && (ref=list.next(true))){
			if(ref && ref._nextElem && ref._nextElem.element===elem){
				ref._nextElem=ref._nextElem._nextElem;
				loop=false;
			}
		}
		return elem;
	};
	this.insertAfter=function(elem,newElem){
		var ref;
		var list=this.iterator();
		var loop=true;
		var wrapper={};
		wrapper.element=newElem;
		while(loop && (ref=list.next(true))){
			if(ref && ref.element===elem){
				var cacheRef=ref._nextElem;
				ref._nextElem=wrapper;
				wrapper._nextElem=cacheRef;
				loop=false;
			}
		}
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

myList.removeItem(elem3);

console.log("\n\nAfter deletion of elem3");
myList.traverseList(function(o){
	console.log(o);
});

myList.insertAfter(elem4,{"x":"7"});
console.log("\n\nAfter inserting new node {x:\"7\"} after elem4");
myList.traverseList(function(o){
	console.log(o);
});
