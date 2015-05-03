/**
 * This Identifier Basics
 * @flow
 */
//'use strict';
function foo(){
  console.log(this.bar);
}
var bar = "global bar!!";
var obj1 = {
  bar: "obj1 bar",
  foo: foo
};
var obj2 = {
  bar: "obj2 bar"
}

foo(); // this->global, this depends on run time, not allowed in strict mode
// browser: "global bar", this->Window Obj
// node : "undefined", this->node Obj

obj1.foo(); // "obj1 bar", this->obj1
//When a function called from an obj, this->obj

foo.call(obj2); // "obj2 bar", this->obj2
// call will pass this to the function scope, call(thisObj, arg1, arg2...)

new foo(); // "undefined", this->{}
// new operator will always give an Empty obj for this to function scope

var Cat = function(){
  this.foo = foo;
  this.bar = "Cat Bar";
  return this;
};
var kitty = new Cat();
kitty.foo();//"Cat Bar", this->kitty
