# Scope
Dig into javascript scope

## Compiler
- javascript is actually compiled before or during execution.
- run time will do tons of optimization

### 3 phases of a typical compiler
1. **lexing/Tokenizing**: change code into meaningful tokens.
2. **parsing**: put tokens to Abstract Syntax Tree
3. **code generation**: turning AST to executable code.

### Challenges
- Only microseconds of compile time before running
- Use every tricks to optimize: JIT, lazy-compile, hot re-compile

### Friendship of Engine, Compiler and Scope

#### compiler meet scope

```
var a = 2;
```

- Compiler always ask Scope when encounter a 'var'
- If it exists in current scope, do nothing
- if not exists, create one at the start of current scope

#### engine meet scope

```
(function IIFE(){
  try{
    unknownA = 10;// LHS, this will leaked to outer scope, which is global
    unknownA = unknownB;//RHS, Ref Err
    console.log(unknownB);//RHS, Ref Err
    unknownA(); // RHS, Type Err
  }catch(err){
    console.log(err);
  }
  var localB = 20;// this will not accessible from outer scope
})();

console.log("Global has unknown A:", unknownA);//10, leaked to global!!
console.log("Global doesn't have localB:", typeof localB);//undefined
```

- Engines always ask Scope when encounter a Variable Assignment
- When current scope fails, go to the outer scope, and ask again
- if fails at the top global scope, Engine need to decide one of followings:

When it's a Variable waiting for assignment:
- AKA "LHS", Left Hand Side
- Think it as SET, or give somebody resources
- **Engine just create a Variable at global scope!**
- **In strict mode, Engine will raise a Reference Error**

Otherwise:
- AKA "RHS", Right Hand Side
- Think it as GET, or retrieve resources from somebody
- **Engine will raise a Reference Error!**

Finally Engine get the var, then try to do something with it.
- **If Engine try to do something it can't do, raise a Type Error!**


## Lexical Scope

- javascript use **Lexical Scope**
- It means scope is defined in **Lex-time/Author-Time**
- Very few language(Perl, EmacsLisp) use Dynamic Scope, which scope is defined in Run Time.

```
// global scope: foo
function foo(a) { // function foo scope: a, b, bar
    var b = a * 2;
    function bar(c) { // function bar scope: c
      console.log( a, b, c );
    } // function bar
    bar(b * 3);
} // function foo
foo( 2 ); // 2, 4, 12
// global
```

Above code have the scope relationship like: global -> foo -> bar

bar failed to find a in its own scope, so it try to find it at foo scope


## Never Cheat Lexical Scope
- 2 ways to cheat lexical scope: eval(), with()
- **Never use them**

### Why not use eval and with?
- Javascript Engine do tons of work to optimize
- both eval and with will change lexical scope at runtime, which make all optimization meaningless
- **cheating lexical scope leads to poorer performance.**
- Other engineers will mock you. Though they don't know why it's bad

### Never use eval

```
function foo(str, a) {
    eval( str ); // cheating!
    console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 ); // 1, 3
```

in strict mode, b will cause a Reference Error

### Never use with
with treats object as if it is a wholly separate lexical scope

```
function foo(obj) {
    with (obj) {
        a = 2;
    }
}
var o1 = { a: 3 };
var o2 = { b: 3 };

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!
```

## IIFE
- stands for Immediately Invoked Function Expression.
- creates its own scope without polluting outside.
- it's a function expression, not a declaration.

### Anonymous vs. Named
Anonymous is shorter, BUT:
- very hard to do recursion (arguments.callee is deprecated)
- debug is painful, because no name in stack traces

So give it a name won't hurt

### Use
IIFE always create a new scope, the func name is not accessible outside

```
// this only runs in browser
var a = 2;
(function IIFE( global ){
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2 global
})( window );
console.log( a ); // 2 global
```

### var don't have block scope

```
(function IIFE(){
  var a = 20;
  if(true){
    var a = 10;// this is still in IIFE scope!!
    a = a / 2;
    console.log(a); // 5
  }
  console.log(a); // 5
})();
```

>in ES6, **let** is the keyword for block scope

### try/catch trick to mimic let
since ES3, catch have block scope for some reason

```
(function IIFE(){
  var a = 20;
  if(true){
    try{
      throw 10;
    }catch(a){
      a = a / 2;// this is block scope...
      console.log(a); // 5
    }
  }
  console.log(a); // 20
})();
```

## Hoisting
- Raise function declaration
- if there's duplicated function declaration name, use the last one
- Raise variable declaration
- Remain assignment at their own place

### Quick example

```
(function IIFE(){
  a = 42;
  var a;
  console.log( a );//42
  /**
   * This code is actually like this:
   * var a;
   * a = 42;
   * console.log(a)
   */
})();

(function IIFE(){
  console.log( a );// undefined
  var a = 42;
  /**
   * This code is actually like this:
   * var a;
   * console.log(a)
   * a = 42;
   */
})();
```

- function expression is not hoisted

```
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
    // ...
};
```

- if/else doesn't matter

```
foo(); // "b"
var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}
```
