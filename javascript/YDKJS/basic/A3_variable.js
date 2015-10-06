/**
 * Variable Basics
 * @flow
 */
'use strict';

/* Hoisting */
var a = 2;
foo();                  // works because `foo()`
                        // declaration is "hoisted"
function foo() {// both declare and implementation is hoisted
    a = 3;
    console.log( a );   // 3
    var a = 1;          // declaration is "hoisted"
                        // to the top of `foo()`
    console.log( a );   // 1
}
console.log( a );   // 2

// var raise delaration, but not assignment, function raise both
console.log(typeof funcExp);// "undefined"
var funcExp = function(){};
console.log(typeof funcExp);// "function"

console.log(typeof func);// "function"
function func(){};
console.log(typeof func);// "function"
// Hoisting raise var delaration, but not assignment


/* Nested Scopes */
function foo1() {
  b = 1; // `b` not formally declared, so it's a unknown global name
  // this will result in b is accessable outside the scope
}
foo1();
console.log(b);//1
