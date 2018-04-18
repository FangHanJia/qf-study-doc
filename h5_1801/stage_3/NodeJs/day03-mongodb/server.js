// 编写登陆、注册、获取用户登陆状态
// 引入模块
const path = require('path');
const bp = require('body-parser');
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const apiResult = require('./utils/apiResult');
const db = require('./utils/db');

// 获取app对象
let app = express();
let bparser = bp.urlencoded({extends:false});

// 全局访问静态文件
app.use(express.static(path.join(__dirname,'/web')));

// 注册路由
app.post('/register',bparser,async (req,res)=>{
    // 获取参数
    let username = req.body.username;
    let password = req.body.password;
    let nickname = req.body.nickname;
    let obj = {
        username,
        password,
        nickname
    }
    let result =await db.insert(obj);
    res.send(result);
});

// 登陆路由
app.post('/login',bparser,async (req,res)=>{
    // 获取参数
    let username = req.body.username;
    let password = req.body.password;
    let nickname = req.body.nickname;
    let obj = {
        username,
        password,
        nickname
    }
    let result =await db.select(obj);
    res.send(result);
});


// 首页获取用户登陆状态:使用async
app.get('/users',async (req,res)=>{
    let result = await db.select();
    // 发给前端
    res.send(result);
});

// 监听端口
app.listen(88);