const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.urlencoded({extended:false}));

// 跨域处理
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, auth, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 引入模块
const user = require('./user');
user.account(app);


// 暴露模块
module.exports = {
    start(_port=88){
        app.listen(_port);
    }
}