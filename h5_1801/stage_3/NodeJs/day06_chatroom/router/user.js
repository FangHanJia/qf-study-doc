const db = require('../utils/db');
// 用户登陆、注册模块
// test
module.exports = {
    account(app){
        // 注册路由
        app.post('/register',async (req,res)=>{
            // 获取用户的数据
            let username = req.body.username;
            let password = req.body.password;
            let nickname = req.body.nickname;

            // 调用数据库的插入方法
            let result = await db.insert('user',{username,password,nickname});
            // 返回状态信息
            res.send(result);
        });
        // 登陆路由
        app.post('/login',async (req,res)=>{
            // 获取用户的数据
            let username = req.body.username;
            let password = req.body.password;

            //  调用数据库的查询方法
            let result =await db.select('user',{username,password});

            // 用户存在则保存session
            if(result.status){
                req.session.user = result.data[0];
            }
            res.send(result);
        });
    }
}