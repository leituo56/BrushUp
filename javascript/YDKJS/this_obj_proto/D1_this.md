# This


## Confusions
There are several common mistakes of this

### this doesn't refer to the function itself
Think about these code

```
function foo(){
  this.count++;
}

foo.count = 0;
for(var i=0; i<5; i++){
  console.log(i);
  foo();
}//0, 1, 2, 3, 4

console.log(foo.count)// 0, WTF?
console.log(count)// NaN, WTF?

// These two works, why?
var data = {
  count:0
};
foo.call(data);//passing data to this obj
console.log(data.count);// 1, this works

foo.call(foo);//passing foo itself to obj
console.log(foo.count); // 1, this also works
```

### this doesn't refer to function's lexical scope
And never will, think about the code below

```
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
    console.log( this.a );
}

foo();
//browser: ReferenceError: a is not defined
//node: TypeError: undefined is not a function
```

## call-site
This refer, and always refer to its call-site!!
