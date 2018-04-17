// express 过滤器
const express = require('express');

let app = express();



let filter = (req,res,next)=>{
    let _name = req.params.name;
    let _psw = req.params.psw;

    if(_name == 'fhj' && _psw =='0000'){
        // 判断时需要返回值
        return next();
    }else{
        next('密码错误');
    }
}


// 局部使用：filter
// 全局使用：app.use(filter);
// app.use(filter);
app.get('/:name/:psw',filter,(req,res)=>{
    res.send('ok');
}).listen(99,()=>{
    console.log('sever run at http://localhost:99');
});
