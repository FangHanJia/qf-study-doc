// 使用路由：获取读取不同的文件发送给前端

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res)=>{
    // 获取url的type
    let urlObj = url.parse(req.url,true).query;
    let type = urlObj.type;

    switch(type){
        // 读取文件a
        case '01_custom_a.js' :
            let file = fs.readFileSync('01_custom_a.js');
            res.statusCode = 200;
            res.setHeader('content-type', 'text/plain;charset=utf8');
            res.write(file);
            break;

        case 'node.jpg' :
            // 读取图片
            let img = fs.readFileSync('../img/node.jpg');
            res.write(img);
            break;
        default:
            res.write('please input your type');
    }
    res.end();

}).listen(88);