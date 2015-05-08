var aDeclaredVar = '*aDeclaredVar*';
undeclaredVar = '*undeclaredVar*';
this.aThisProperty = '*aThisProperty*';
module.aModuleProperty = '*aModuleProperty*';
module.exports.anExportProperty = '*anExportProperty*';

console.log('this', this);
console.log('this === exports', this === exports);
console.log('this === module', this === module);
console.log('this === module.exports', this === module.exports);
console.log('aDeclaredVar', aDeclaredVar);
console.log('undeclaredVar', undeclaredVar);
console.log('this.aThisProperty', this.aThisProperty);
console.log('module.aModuleProperty', module.aModuleProperty);
console.log('module.exports.anExportProperty', module.exports.anExportProperty);
console.log('global.undeclaredVar', global.undeclaredVar);
console.log('global.aDeclaredVar', global.aDeclaredVar);
