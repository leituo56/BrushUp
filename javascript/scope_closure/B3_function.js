/**
 * Function features related to scope
 */

/* IIFE */

// this only runs in browser
try{
  var a = 2;
  (function IIFE( global ){
      var a = 3;
      console.log( a ); // 3
      console.log( global.a ); // 2 global
  })( window );
  console.log( a ); // 2 global
}catch(err){ console.log("Non Browser!")};


/* Blocks */
(function IIFE(){
  var a = 20;
  if(true){
    var a = 10;// this is still in IIFE scope!!
    a = a / 2;
    console.log(a); // 5
  }
  console.log(a); // 5
})();


/* try catch to mimic let */
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

// ES 6 const, not runnable in lot of runtime yet
const b = 3;
b = 4;// change nothing
console.log(b);


/* Hoisting */
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

// function expression hoisting
try{
  foo(); // TypeError
  bar(); // ReferenceError

  var foo = function bar() {
      // ...
  };
}catch(err){};

// function declaration vs. function expression
(function IIFE(){
  function foo() {
      console.log( 10 );
  }
  foo(); // 10
  foo = function() {
      console.log( 20 );
  };
  foo(); // 20
})();

// if/else block doesn't matter
(function IIFE(){
  foo(); // "b"
  var a = true;
  if (a) {
     function foo() { console.log( "a" ); }
  }
  else {
     function foo() { console.log( "b" ); }
  }
})();
