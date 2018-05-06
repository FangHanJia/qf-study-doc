const jwt = require('jsonwebtoken');
const db = require('../api/db');
const apiResult = require('../api/apiResulet');

let filter = function(req,res,next){
    let token = req.headers['auth'];console.log(!token);
    if(!token){
        console.log(666)
    }else{
        jwt.verify(token,'1234',(error,result)=>{
            if(error){
                res.send(apiResult(false,{},'unauth'));
            }else{
                next();
            }
        })
    }
}

// 用户登陆注册的模块
module.exports = {
    account(app){
        // 登陆
        app.post('/login',async (req,res)=>{
            // 获取用户信息
            let username = req.body.username;
            let password = req.body.password;
            // 调用数据库接口
            let result = await db.select('user',{username,password});
            // 如果用户存在则设置token
            if(result.status){
                let token = jwt.sign({username},'1234',{
                    'expiresIn':60*60
                })
                let ar = apiResult(result.status,token);
                res.send(ar);
            }else{
                res.send(result);
            }
        });
        // 注册
        app.post('/register',async (req,res)=>{
            // 获取信息
            let username = req.body.username;
            let password = req.body.password;

            // 调用数据库插入用户
            let result = await db.insert('user',{username,password});
            res.send(result);
        });

        // 获取所有用户
        app.get('/user',filter,async (req,res)=>{
            let result = await db.select('user');
            res.send(result);
        })
    }
}