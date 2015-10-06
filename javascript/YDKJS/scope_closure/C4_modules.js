/**
 * Modules
 * @flow
 */


/**
 * A Sample Stack
 * @return {Object}                Object or function of API
 */
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
//Test stack
(function IIFE(){
  var myStack = Stack();
  myStack.push(3);
  myStack.push(5);
  myStack.push(4);
  while(!myStack.isEmpty()){
    console.log(myStack.pop());//4 5 3
  }
})();


/* Module Manager */

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
