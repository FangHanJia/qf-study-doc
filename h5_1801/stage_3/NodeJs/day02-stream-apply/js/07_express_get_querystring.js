// express模块

// 引入第三方模块
const express = require('express');
// 1、得到app对象
let app = express();

// 1、get接收参数方式一：querystring
app.get('/login',(req,res)=>{
    // 使用querystring获取参数
    let _name = req.query.name;
    let _psw  = req.query.psw;
    let obj = {
        name :_name,
        psw  :_psw
    }
    // 将对象发回前端
    res.send(obj);
});

// 2、开启服务，监听端口
app.listen(88,()=>{
    console.log('server run at http://localhost:88');
});

