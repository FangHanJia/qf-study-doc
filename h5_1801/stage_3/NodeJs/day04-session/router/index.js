// 用于启动服务器和引入功能路由模块
const path = require('path')
const bp = require('body-parser');
const express = require('express');
const cp = require('cookie-parser');
const session = require('express-session');

const app = express();

// 配置session
app.use(cp());
app.use(session({
    secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 500000 },  //设置maxAge是5000ms，即5s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,    
}))

app.use(express.static(path.join(__dirname, '../web/')))
app.use(bp.urlencoded({extends: false}))

const user = require('./user')
const product = require('./product')
const order = require('./order')
const supplier = require('./supplier')

user.register(app);
product.register(app)
order.register(app);
supplier.register(app);

module.exports = {
    start(_port = 88){
        app.listen(_port)
    }
}