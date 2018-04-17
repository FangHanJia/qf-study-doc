// express post接收参数
// 引入模块
const express = require('express');
const bp = require('body-parser');
// 1、得到对象
let app = express();

// 2、编码解析
let bpEncoded = bp.urlencoded({extended:false});

// 3、post 获取参数
app.post('',bpEncoded,(req,res)=>{
    let _name = req.body.name;
    let _psw = req.body.psw;
    let obj = {
        name:_name,
        pws:_psw
    }
    res.send(obj);
});

// 开启服务，监听端口
app.listen(88,()=>{
    console.log('server run at http://localhost:88');
});