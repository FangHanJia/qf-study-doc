// node 文本写入
const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    // 覆盖写入
    // fs.writeFile('05_input.txt','this is a test file!',function(err){
    //     if(err){
    //         return console.error(err);
    //     }else{
    //         response.end('success');
    //     }
    // });
    
    // 2、追加写入
    fs.appendFile('05_input.txt','fist add a file!',function(err){
        if(err){
            return console.error(err);
        }else{
            response.end('success!');
        }
    });
}).listen(88);