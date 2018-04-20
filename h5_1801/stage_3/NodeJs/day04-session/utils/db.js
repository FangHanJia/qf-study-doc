const mongodb = require('mongodb');
const apiReulst = require('./apiResult')
const mc = mongodb.MongoClient;

var db = null;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('1801');
})

module.exports = {
    async select(_collection, _condition = {}){
        try{
            let items =  await db.collection(_collection).find(_condition).toArray();
            let result = apiReulst(items.length > 0, items);
            return result;
        } catch(error){
            return apiReulst(false, error);
        }
    },
    async insert(_collection, _data){
        try{
            let result = await db.collection(_collection).insert(_data);
            return apiReulst(result.insertedCount > 0, result.result);
        }catch(error){
            return apiReulst(false, error);
        }
    },
    update(){},
    delete(){}
}