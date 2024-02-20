const os = require('os')

//info about the current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds
console.log(`th system uptime in seconds is ${os.uptime()}`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalmem:os.totalmem()
}
console.log(currentOS)