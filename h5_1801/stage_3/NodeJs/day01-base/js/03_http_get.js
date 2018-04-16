// get请求接收参数

const http = require('http');
const url = require('url');

http.createServer((request,response)=>{
    // 将url转为对象
    let urlObj = url.parse(request.url,true).query;
    // let type  = urlObj.type;

    // 路由
    // switch(type){
    //     case 'produce' :
    //     response.write('type=produce');
    //     break;
    //     case 'id' :
    //     response.write('type=id');
    //     break;
    //     default:
    //     response.write('error');
    // }
    response.end(JSON.stringify(urlObj));
}).listen(88);