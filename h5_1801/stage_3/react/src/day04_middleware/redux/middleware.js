// 中间件：用于手动触发方法
import http from 'superagent'

export default function(api){
    return function(dispatch){
        return function(action){
            // 解构赋值
            let {type,url} = action;

            if(!url){
                dispatch(action)
            }else {
                // 发起ajax请求
                http.get(url).end((error,res)=>{
                    dispatch({
                        type,
                        data:res.body.data
                    })
                })
            }
        }
    }
}