/**
 * Closure loop example
 * @flow
 */

/* Common pit fall */
(function IIFE(){
  for(var i=0; i<5; i++){
    setTimeout(function timer(){
      console.log(i, "seconds");
    }, i * 1000);
  }
})();

/* Fix this problem */
(function IIFE(){
  for(var i=0; i<5; i++){
    (function (j){
      setTimeout(function timer(){
        console.log(j, "seconds");
      }, j * 1000);
    })(i);
  }
})();
