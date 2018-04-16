// post方式接收参数

const http = require('http');
const querystring = require('querystring');
const util = require('util');

http.createServer((request,response)=>{
    let data = '';

    // 当请求方式为post时调用
    request.on('data',function(_data){
        data += _data;
    });

    // 结束
    request.on('end',function(){
        let obj = querystring.parse(data);
        response.end(util.inspect(obj));
    });

}).listen(88);