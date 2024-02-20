const { readFile,writeFile } = require("fs");
console.log("start")
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/first.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second = result
        
        writeFile('./content/asyncfs.txt',`${first} ${second} are written`,(err,result)=>{
            if(err){
            console.log(err)
            return
            }
            console.log("write")
        })
    })
})
console.log("next one")
