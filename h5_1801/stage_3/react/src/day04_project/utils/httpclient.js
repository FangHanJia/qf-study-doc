// 对superagent进行二次封装
import http from 'superagent';

export default {
    get(_url,_data){
        // 使用promise
        return new Promise((resolve,reject)=>{
            http.get(_url).query(_data).end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(res.body)
                }
            })
        })
    }
}