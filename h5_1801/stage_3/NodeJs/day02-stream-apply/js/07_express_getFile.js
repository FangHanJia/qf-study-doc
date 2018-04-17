// 获取服务端的静态文件
// 引入模块
const express = require('express');
// 1、获取app对象
let app = express();

// 2、获取静态文件
app.get('/:file',(req,res)=>{
    let file = req.params.file;
    res.sendFile(__dirname + '/'+file);
       
});

// 启动服务器,监听端口
app.listen(88,()=>{
    console.log('server run at http://localhost:88');
});