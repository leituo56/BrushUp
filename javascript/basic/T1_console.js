// Guess what will happend?


/* Print Object */
console.log('This is a string', { foo: 'bar' }, { bar: 'foo' });
// Developer Tool:  This is a string Object {foo: "bar"} Object {bar: "foo"}
// Node:            This is a string { foo: 'bar' } { bar: 'foo' }


/* Format Print */
var number = 11 * 9;
var color = 'red';
var float = '3.54000';
console.log('%d %s balloons, price: %d, %s', number, color, float, float);
// Developer Tool:  99 red balloons, price: NaN, 3.54000
// Node:            99 red balloons, price: 3.54, 3.54000

/* Print stack */
var foo = function(){
  console.trace('whatever');
}
foo();
// print stack trace


/* Calculate Time */
console.time('Math');
for(var i=0; i<1000000000;i++){
  i = i * 1.1 / 2.0 * 1.9;
}
console.log(i);
console.timeEnd('Math');
// print executing time


/* Assertion */
var count = 5;
console.assert(count < 10, 'count is not larger than 10');
// Both: Error!!
