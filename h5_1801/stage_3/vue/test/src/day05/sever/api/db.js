const apiResult = require('./apiResulet');
const mc = require('mongodb').MongoClient;
let db = null;

mc.connect('mongodb://localhost:27017',(error,client)=>{
    db = client.db('1801');
});

// 暴露数据库模块
module.exports = {
    // 查询
    async select(_collection,_condition = {}){
        try{
            let items =await db.collection(_collection).find(_condition).toArray();
            let result = apiResult(items.length > 0,items);
            return result;
        }catch(error){
            apiResult(false,error);
        }
    },
    // 插入
    async insert(_collection,_data={}){
        try{
            let result = await db.collection(_collection).insert(_data);
            return apiResult(result.insertedCount > 0,result.result);
        }catch(error){
            apiResult(false,error);
        }
    }

}