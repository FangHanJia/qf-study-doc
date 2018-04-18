// 对数据库的增删查改操作
const mongodb = require('mongodb');
const mc = mongodb.MongoClient;
const apiResult = require('./apiResult.js');

var db = null;

// 连接数据库
mc.connect('mongodb://localhost:27017',(error,client)=>{
    // 切换到当前数据库
    db = client.db('1801');
});

// 暴露模块
module.exports = {
    // 查询
    async select(_condition={}){
        try{
            let items = await db.collection('user').find(_condition).toArray();
            let result = apiResult(true,items);
            return result;
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 插入
    async insert(obj){
        try{
            let status = await db.collection('user').insert(obj);
            let result = apiResult(true,status.result);
            return result;
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 修改
    update(){},
    // 删除
    delete(){
        
    }
}