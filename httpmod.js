const http = require('http');
const server = http.createServer((req,res)=>{
    //console.log(req) //go to the webpage and refresh to print the object
    if(req.url === '/'){
        res.end("Welcome to my home page")
       
    }
    if(req.url === '/about'){
        res.end("Here is our Short History")
    }
    else{
    res.end(`
    <h1>Oops!</h1>
    <p> we cant find the page u requested. </p>
    <a href="/"> back home </a>
    `)
    }
}
)
//req is the incoming requests 
//res is the reponse

server.on('error', (error) => {
    console.error('Server error:', error);
});

server.listen(5000)
//port no


//type localhost:portno in web browser



