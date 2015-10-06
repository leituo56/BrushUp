/**
 * Prototype Basics
 * @flow
 */

/* Prototype */
var foo = {
  a: 42
};
// create bar and prototype link to foo
var bar = Object.create(foo);
bar.b = "Hello";
console.log(bar.b); // "Hello"
console.log(bar.a); // 42, delegated to foo
