# Developer Tools Tips
Tips of Google Chrome Developer Console
## Useful Links
- [Tutorial](http://blog.teamtreehouse.com/mastering-developer-tools-console)


## Multiple Lines of Code in console
```
<shift> + <Enter>
```

## Clear Console
```
console.clear();
```

## Style
```
console.log('%cThis text is styled!',
  'color: #86CC00; background-color: blue; font-size: 20px; padding: 3px;');
```

## Table
```
var data = [
    {first_name: 'Matt', last_name: 'West', occupation: 'Programmer'},
    {first_name: 'Vince', last_name: 'Vaughn', occupation: 'Actor'},
    {first_name: 'Larry', last_name: 'Page', occupation: 'CEO'}  
];

console.table(data);
```

## Count
Count the number of calling
```
function clickHandler() {
    console.count('Click handler called');
}
clickHandler();
clickHandler();
```

## Different Method
- log vs. dir
```
console.log(document.body);
console.dir(document.body);
```

- info vs. error(with call stack tracing) vs. trace
```
var foo = function(){
    console.trace('whatever');
    console.error('Page not found (404)');
    console.info('This is an info!');
    console.warn("This is a warning!");
}
foo();
```

## Time
```
console.time('Math');
for(var i=0; i<1000000000;i++){
  i = i * 1.1 / 2.0 * 1.9;
}
console.log(i);
console.timeEnd('Math');
```

## Profiling
// TODO

## Group
// TODO
