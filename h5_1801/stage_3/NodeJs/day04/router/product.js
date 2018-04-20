const db = require('../utils/db')
const path = require('path');
const multer = require('multer')
const apiResult = require('../utils/apiResult')
// const _path = path.join(__dirname, '../temp');
// const upload = multer({dest: _path})

var fs = require('fs');
//设置上传的目录，  
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var _path = path.join(__dirname, "../temp");
        if(!fs.existsSync(_path)){
            fs.mkdirSync(_path);
        }
        cb(null, _path);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);  
    }
});

// // 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

let filter = (req, res, next) => {
    if(req.session.user){
        next()
    } else {
        res.send(apiResult(false, null, 'unauth'))
    }
}

module.exports = {
    register(app){
        app.post('/addproduct', filter, upload.single('proimg'), async (req, res) => {
            let proname = req.body.proname;
            let price = req.body.price;
            let pathname = `/temp/${req.file.originalname}`;
            let username = req.session.user.username
            // console.log(req.file);
            let result = await db.insert('products', {proname, price, pathname, username});
            res.send(result);   
        })       
    }
}
