// 操作数据库的模块
const mongodb = require('mongodb');
const mc = mongodb.MongoClient;
const apiResult = require('./apiResult');

// 连接数据库
var db = null;
mc.connect('mongodb://localhost:27017',(error,client)=>{
    db = client.db('1801');
});

// 暴露模块
module.exports = {
    // 查询
    async select(_collection,_condition = {}){
        try{
            let items = await db.collection(_collection).find(_condition).toArray();
            let result = apiResult(items.length > 0,items);
            // 返回查询到的数据
            return result;
        }catch(error){
            // 抛出异常
            return apiResult(false,error);
        }
    },
    // 插入
    async insert(_collection,_data){
        try{
            let result = await db.collection(_collection).insert(_data);
            return apiResult(result.insertedCount > 0,result.result);
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 修改
    update(){},
    // 删除
    delete(){}
}