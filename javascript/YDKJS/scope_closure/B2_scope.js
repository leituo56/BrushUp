/**
 * Scope Concepts
 */

//'use strict';

/* Scope Basics */

(function IIFE(){
  try{
    unknownA = 10;// LHS, this will leaked to outer scope, which is global
    unknownA = unknownB;//RHS, Ref Err
    console.log(unknownB);//RHS, Ref Err
    unknownA(); // RHS, Type Err
  }catch(err){
    console.log(err);
  }
  var localB = 20;// this will not accessabe from outer scope
})();

console.log("Global has unknown A:", unknownA);//10, leaked to global!!
console.log("Global doesn't have localB:", typeof localB);//undefined


/* Lexical Scope */

// global scope: [foo]
function foo(a) { // function foo scope: [a, b, bar]
    var b = a * 2;
    function bar(c) { // function bar scope: [c]
      console.log( a, b, c );
    }// function bar
    bar(b * 3);
} // function foo
foo( 2 ); // 2, 4, 12
// global


/* Eval */
(function IIFE(){
  function foo(str, a) {
      eval( str ); // cheating!
      console.log( a, b );
  }
  var b = 2;
  foo( "var b = 3;", 1 ); // 1, 3
})();


/* With */
(function IIFE(){
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
})();
