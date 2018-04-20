// 开启一个websocket服务器
// 引入模块
const path = require('path');
const express = require('express');
const app = express();

// 配置全局静态文件
app.use(express.static(path.join(__dirname,'/')));
app.get('/a',(req,res)=>{
    res.send(true);
});

//  开启服务:express
 let server = require('http').Server(app);
 let socketServer = require('ws').Server;
 let wss = new socketServer({server:server,port:88});

 // 监听连接成功事件
 wss.on('connection',client=>{
    // 接收客服端的消息
    client.on('message',_msg=>{
        console.log(_msg);
        // 将收到的消息发给客户端
        wss.broadcast(_msg);
    });

 });

 // 封一个发送广播函数
 wss.broadcast = _msg=>{
    wss.clients.forEach(client=>{
        client.send(_msg);
    });
 }

 app.listen(8080);