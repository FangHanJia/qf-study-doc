// 引入模块
const http = require('http');
const hostname = '127.0.0.1';
const port = 88;

http.createServer((request,response)=>{
    response.end('hello node.js');
}).listen(port,hostname,function(){
    console.log(`server run at http://${hostname}:${port}/`);
});