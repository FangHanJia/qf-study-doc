// 创建服务器
const path = require('path')
const bp = require('body-parser');
const express = require('express');
const cp = require('cookie-parser');
const session = require('express-session');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

// 配置全局session
app.use(cp());
app.use(session({
    secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 500000 },  //设置maxAge是5000ms，即5s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,    
}));

// 配置全局静态文件
app.use(express.static(path.join(__dirname,'../web/')));
app.use(bp.urlencoded({extends:false}));

// 引入功能路由
const user = require('./user');
const server = require('../server_io');
// 传递app对象：用户模块
user.account(app);
server.server(io);

// 暴露模块
module.exports = {
    start(_port=8080){
        http.listen(_port);
    }
}