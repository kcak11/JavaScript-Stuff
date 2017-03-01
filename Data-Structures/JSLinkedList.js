/**************
A simple JavaScript Linked List example by K.C.Ashish Kumar
with traverseList and iterator features

Dt: 01/03/2017

(c) Ashish's Web - http://www.ashishkumarkc.com
License: https://kcak11.mit-license.org/
*************/

var LinkedList=function(){
	var _list;
	var _currentElem=null;
	var _firstElem;
	var _nextElem="unassigned";
	this.addToLinkedList=function(elem){
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
	this.next=function(){
		if(_nextElem==="unassigned"){
			_nextElem=_firstElem;
		}else{
			_nextElem=(_nextElem)?_nextElem._nextElem:null;
		}
		return (_nextElem && _nextElem._nextElem)?_nextElem._nextElem.element:null;
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

myList.addToLinkedList(elem1);
myList.addToLinkedList(elem2);
myList.addToLinkedList(elem3);
myList.addToLinkedList(elem4);
myList.addToLinkedList(elem5);

myList.traverseList(function(e){
	console.log("Via traverseList: ",e);
});

var itr=myList.iterator();
var obj;
while(obj=itr.next()){
	console.log("Via Iterator: ",obj);
}
