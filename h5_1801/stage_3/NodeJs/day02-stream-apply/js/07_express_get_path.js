// express接收参数方式二:路径
// 引入模块
const express = require('express');

// 1、得到app对象
let app = express();

// 2、使用路径方式获取参数:req.params
app.get('/:name/:psw',(req,res)=>{
    let _name = req.params.name;
    let _psw = req.params.psw;

    // 将数据返回给前端
    let obj = {
        name:_name,
        psw:_psw
    }
    res.send(obj);
});

// 开启服务，监听端口
app.listen(88,()=>{
    console.log('server run at http://localhost:88');
});