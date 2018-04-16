// node 读取文本：
 
const http = require('http'); 
const url = require('url'); 
const fs = require('fs'); 

http.createServer((request,response)=>{
    
    //  1、异步读取文件
    // fs.readFile('./01_custom_a.js',(err,data)=>{
    //     if(err){
    //         return console.error(err);
    //     }else {
    //         response.write(data.toString());
    //         response.end();
    //         // console.log(data.toString());
    //     }
    // });
    
    // 2、同步读取文件
    let data  = fs.readFileSync('01_custom_a.js');
    response.end(data.toString());
}).listen(88);
