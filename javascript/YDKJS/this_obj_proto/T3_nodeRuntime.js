var aDeclaredVar = '*a Declared Var*';
undeclaredVar = '*undeclared Var*';
this.aThisProperty = '*a This Property*'; // in 'this'
module.aModuleProperty = '*a Module Property*';
module.exports.anExportProperty = '*an Export Property*'; // in 'this'

console.log('this', this); // declared var, export prop
console.log('this === exports', this === exports); //true
console.log('this === module', this === module); //false
console.log('this === module.exports', this === module.exports); //true

console.log('aDeclaredVar', aDeclaredVar);
console.log('undeclaredVar', undeclaredVar);
console.log('this.aThisProperty', this.aThisProperty);
console.log('module.aModuleProperty', module.aModuleProperty);
console.log('module.exports.anExportProperty', module.exports.anExportProperty);

console.log('global.undeclaredVar', global.undeclaredVar);
console.log('global.aDeclaredVar', global.aDeclaredVar); //undefined
