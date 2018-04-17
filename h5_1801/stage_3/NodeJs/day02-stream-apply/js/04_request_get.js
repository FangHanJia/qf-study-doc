// request -- 第三模块：简单的服务器代理
const request = require('request');
// 1、get请求
request.get('https://cnodejs.org/api/v1/topics?page=1&limit=10',(err,res,body)=>{
    console.log(body);
});