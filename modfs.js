const {readFileSync, writeFileSync} = require('fs')
const file = readFileSync('./content/first.txt','utf8')
console.log(file)
console.log('start')

writeFileSync('./content/second.txt',`here is the result of readSYNC ${file}`)


//to append to a file
writeFileSync('./content/second.txt',`here is the result of readSYNC ${file}`,{flag:'a'})
console.log('done')
console.log('starting with the next')