/**
* Object Constructor Extending Functionality
* @Author: K.C.Ashish Kumar
* @Version: 1.21
* @Support: http://www.ashishkumarkc.com
*/

var ObjectConstructorExtend=function(a){
    return function(b){
        if(a && typeof a.initialize==="function"){
            var _initialize=a.initialize;
            a.initialize=function(){
                if(!a.initialize.invokedAlready){
                    _initialize.call(b);
                    a.initialize.invokedAlready=true;
                }else{
                    if(window.console && typeof window.console.log==="function"){
                        window.console.log("Initialize can be invoked only once . . .");
                    }
                }
            };
            a.initialize.call(b);
        }
        var _o={};
        for(var i in a){
            if(a[i]){
                _o[i]=a[i];
            }
        }
        for(var i in b){
            if(b[i]){
                _o[i]=b[i];
            }
        }
        return _o;
    };
};

/*------------------Usage Example------------------*/

var Emp=ObjectConstructorExtend({
    initialize:function(){alert("invoked initialize for "+this.oData);},
    doProcess:function(){alert("Processed..."+this.oData);}
});

var e1=new Emp({"oData":"Ashish Kumar"});
