/**
 *  Functions
 *  @flow
 */
'use strict';

console.log("start");

/* Immediately Invoked Function Expressions (IIFEs) */
var a = 10;
(function func(){
  var a = 42;
  console.log(a, "This is a function, func is not accessible outside");
  // console.trace();
})();
console.log(typeof func, a);// "undefined" 10, func become an unknown global name

// Regular function expression
var funcExp = function(){
  console.log("This is a function expression");
};
funcExp();

//Return value
var x = (function IIFE(){ return "Returned Value";})();
console.log(x);


/* Closure */
// A simple example
function makeAdder(increment){
  function add(base){
    return base + increment;
  }
  return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log(plusOne(1), plusOne(5), plusTen(1), plusTen(5));//2, 6, 11, 15

/* Modules */
function User(){
  var username;//private
  var password;//private
  function login(uname, pass){
    username = uname;
    password = pass;
  }
  function toString(){
    console.log("User: %s, Pass: %s", username, password);
  }
  return {
    login:login,
    toString:toString
  }
}
//Test
var me = User();// why not use new?
me.toString();// undefined undefined
me.login("Tuo", "wow!"); // Tuo wow
me.toString(); // Tuo wow

var you = User();// why not use new?
you.login("Jason", "nope!");
you.toString();
