//to access those names in export thing 
const names = require('./export')
console.log(names)
const sayHi = require('./funcexport')

sayHi("ujwal")
sayHi(names.john)
sayHi(names.john2)


module.export.items = ['item1','item2']
const person = {
    name:'bob'
}
module.export.singlePerson = person
//alternative syntaxes