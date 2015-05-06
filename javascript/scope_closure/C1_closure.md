# Closure

>Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

A more easy to understand way
- access a function/object that is not in current lexical scope
- the function access some var in other scope
- those vars will not die even after the scope is closed.

>Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.

## Quick Example
- Following code is a Closure

```
/* Simple Closure */
(function IIFE(){
  function foo(item){
    var time = 0;
    function add(){
      time++;
      console.log(time, item);
    }
    return add;
  }
  var eggCounter = foo("egg"); //get add() function
  var appleCounter = foo("apple"); // get another add() function
  eggCounter();//1
  eggCounter();//2
  appleCounter();//1
  appleCounter();//2
})();
```

- Following code is Not a Closure

```
/* Not a Closure */
(function IIFE(){
  function foo(item){
    var time = 0;
    function add(){
      time++;
      console.log(time, item);
    }
    add();// not a closure, because add() is run in its lexical scope
  }
  foo("egg"); //1
  foo("egg"); //1
  foo("apple"); //1
  foo("apple"); //1
})();
```
## Facility doesn't matter

>Whatever facility we use to transport an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and wherever we execute it, that closure will be exercised.

### module

#### A sample Stack

```
function Stack(){
  var arr = [];// private
  function push(item){
    arr.push(item);
    return arr.length;
  }
  function pop(){
    return arr.pop();
  }
  function isEmpty(){
    return arr.length === 0;
  }
  function top(){
    if(isEmpty())
      return undefined;
    return arr[arr.length - 1];
  }
  var publicAPI = {
    push: push,
    pop: pop,
    isEmpty: isEmpty,
    top: top
  }
  return publicAPI;
}
```

#### A sample module manager
Use different modules with dependencies

```
var MyModules = (function Manager(){
  var modules = {};

  /**
   * Define a module
   * @param  {String} name           name of the module
   * @param  {Array} depends        List of String of dependent module
   * @param  {Function} implementation function of the module
   * @return {Object}                Object or function of API
   */
  function define(name, depends, implementation){
    for(var i=0; i<depends.length; i++){
      //try to change dependency name to object in modules
      depends[i] = modules[depends[i]];
    }
    //apply(thisObj, [arg1, arg2,...]);
    modules[name] = implementation.apply(implementation, depends);
  }

  function get(name){
    return modules[name];
  }

  return {
    define: define,
    get:get
  }
})();

MyModules.define("stack", [], Stack);
MyModules.define("util", ["stack"], function Util(stack){
  function reverseMirror(arr){
    for(var i=0; i<arr.length; i++){
      stack.push(arr[i]);
    }
    while(!stack.isEmpty()){
      arr.push(stack.pop());
    }
    // return result;
  }
  return {
    reverseMirror:reverseMirror
  }
});

(function IIFE(){
  var util = MyModules.get("util");
  var arr = [1,2,3];
  util.reverseMirror(arr);
  console.log(arr);
})();
```

## Loop

Really careful of loop

### Pitfall example
this code will output 5 seconds for 5 times

```
for(var i=0; i<5; i++){
  setTimeout(function timer(){
    console.log(i, "seconds");
  }, i * 1000);
}
```

This can be fixed by giving i its own scope every time.

IIFE could give separate scopes

```
for(var i=0; i<5; i++){
  (function (j){
    setTimeout(function timer(){
      console.log(j, "seconds");
    }, j * 1000);
  })(i);
}
```
