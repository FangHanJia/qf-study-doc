// express--第三方模块
// 引入模块
// 1、开启一个服务
const express = require('express');
// 2、得到app对象
let app = express();

// 3、监听端口
app.listen(88,()=>{
    console.log('server run at http://localhost:88');
});