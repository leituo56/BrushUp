/**
 * Closure
 * @flow
 */

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
  var eggCounter = foo("egg"); //get add() function, close over time
  var appleCounter = foo("apple"); // get another add() function, close over another time
  eggCounter();//1
  eggCounter();//2
  appleCounter();//1
  appleCounter();//2
})();


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


// Will this change?
(function IIFE(){
  var time = 0;
  function foo(item){
    function add(){
      time++;
      console.log(time, item);
    }
    return add;
  }
  (function IIFE(){
    var time = 100;//This will not help
    var eggCounter = foo("egg"); //get add() function
    var appleCounter = foo("apple"); // get another add() function
    eggCounter();//1
    eggCounter();//2
    appleCounter();//3
    appleCounter();//4
  })();
  console.log(time);//4
})();
console.log(typeof time); //undefined


// Another example
(function IIFE(){
  function foo() {
    var a = 2;
    function baz() {
        console.log( ++a );
    }
    bar( baz );
  }

  function bar(fn) {
      fn(); // look ma, I saw closure!
      fn();
  }
  foo(); //3 4
})();
