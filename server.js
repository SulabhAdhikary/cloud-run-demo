const http =  require('http');

const server = http.createServer((req, res)=> {
    console.log('server created');
    res.end("hello awsone send now");

})

const PORT = process.env.port || 8080;
server.listen(PORT, ()=>{
    console.log('server started');
})
