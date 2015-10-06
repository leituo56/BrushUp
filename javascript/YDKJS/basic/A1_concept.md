# Concepts
How to explain these in English
- Statements
- Expression

## Variables
Start with $,[A-Z],[a-z],_

Then able to plus [0-9]


variable vs. literal value?


### Hoisting
>Wherever a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout.

Think about this code

```
console.log(typeof funcExp);// "undefined"
var funcExp = function(){};
console.log(typeof funcExp);// "function"

console.log(typeof func);// "function"
function func(){};
console.log(typeof func);// "function"
```

### Scope
function scope or global scope.

- let 
let has block scope, in ES6

```
{
  let a = 10;
}
a //undefined
```

## Types
```
typeof null  //"object", null is an object!!
typeof NaN   //"number", NaN is a Number!!
```

### Q: Static Typing vs. Dynamic Typing?
AKA: type enforcement vs. weak typing

### Coercions
What is Coercion?

### Trusy and Falsy
works in if(variable){};

- Trusy: {}, {0}, {null}, [], [0], "hello", -1
- Falsy: "", 0, -0, null, undefined, NaN

### Equality
> == checks for value equality with coercion allowed
> === checks for value equality without allowing coercion

Always becarefull!!! Think about this:

```
true == {}; //false
true == !{}; //false
true == !!{}; //true

if({}) console.log("this will print");
if({}==true) console.log("this will not print");
```
- Boolean will coercion to Number! true->1
- Array will coercion to String!   [1,2,3]->"1,2,3"
- so false == [0];

Think about this code:

```
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
console.log(a == c);//true, [1,2,3] -> "1,2,3"
console.log(b == c);//true, the same reason
console.log(a == b);//false,
//because the type is same, so compare ref
```

Tips:

- If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
- If either value in a comparison could be of these specific values (0, "", or []—empty array), avoid == and use ===.
- In all other cases, you’re safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves read‐ ability.

### Inequality
```
41 < "42" //true, because different type, do Coercion, 41 < 42
"42" < "5" //true, because same type, no Coercion, '4' < '5'
"bar" < "foo" //true
```

## Functions
Explain function and function expressions

### Immediately Invoked Function Expressions (IIFEs)
Notice the scope and func value
```
var a = 10;
(function func(){
  var a = 42;
  console.log(a, "This is a function, func is not accessible outside");
  // console.trace();
})();
console.log(typeof func, a);// "undefined" 10


var funcExp = function(){
  console.log("This is a function expression");
};
funcExp();
```

### Closures
A simple Example

```

function makeAdder(increment){
  function add(base){
    return base + increment;
  }
  return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log(plusOne(1), plusOne(5), plusTen(1), plusTen(5));//2, 6, 11, 15
```

A module Example, think about it, why new is not used?

```
function User(){
  var username; // private
  var password; // private
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

var me = User();// why not use new?
me.login("Tuo", "wow!"); // Tuo wow
me.toString(); // Tuo wow
```

## This Identifier
>this does not refer to the function itself, which object it points to depends on how the function was called.

There are 4 mode to assign this identifier:

- call directly
- call via an Object
- call by Function::call(thisObj, arg1, arg2...)
- call by new

```
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
```

## Prototype
>pattern called “behavior delegation,” where you intentionally design your linked objects to be able to delegate from one to the other for parts of the needed behavior.

```
var foo = {
  a: 42
};
// create bar and prototype link to foo
var bar = Object.create(foo);
bar.b = "Hello";
console.log(bar.b); // "Hello"
console.log(bar.a); // 42, delegated to foo
```

## Old and New
How to apply new features to old browsers?

### Polyfilling
>taking the definition of a newer feature and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environments.

```
if (!Number.isNaN) {
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}
```
e.g. ES6-shim, HTML5-shim

### Transpiling
>use a tool that converts your newer code into older code equivalents

Babel: (formerly 6to5) Transpiles ES6+ into ES5
Traceur: Transpiles ES6, ES7, and beyond into ES5

### Non JS
DOM, alert and many more.

