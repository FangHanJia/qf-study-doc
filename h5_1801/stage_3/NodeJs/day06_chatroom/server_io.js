// 用于启动服务器
// const path = require('path');
// const express = require('express');
// const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// // 配置全局
// app.use(express.static(path.join(__dirname,'./web/')));
let onlineObj = {};

module.exports = {
    server(io){
        // 执行连接事件
        io.on('connection',client=>{
            // 1、封一个用户登陆的自定义事件
            client.on('slogin',(_person)=>{
                let person = JSON.parse(_person);
                // 将用户保存在一个对象里
                onlineObj[person.id] = person;
                console.log(onlineObj);
                // 2、执行创建一个人物函数
                io.emit('createPerson',onlineObj);
            });

            // 封一个人物移动的自定义事件
            client.on('position',(_person)=>{
                let person = JSON.parse(_person);
                if(onlineObj[person.id]){
                    onlineObj[person.id].x = person.x;
                    onlineObj[person.id].y = person.y;
                }

                // 调用客户端移动
                io.emit('move',_person);
            });


            // 封一个接收消息事件
            client.on('sendMsg',function(_msg){
                console.log(_msg);
                // 将消息广播给所有在线用户
                io.emit('acceptMsg',_msg);
            });
        });
    }
}



// http.listen(88); 
