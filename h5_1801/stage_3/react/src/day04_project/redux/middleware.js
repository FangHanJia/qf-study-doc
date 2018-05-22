// 中间件
import http from '../utils/httpclient.js'
import * as constants from '../component/datagrid/constants.js'; 
export default function middleware(api){
    return function(dispatch){
        return function(action){
            // 解构赋值
            let {url,data,method,types,name} = action;
            if(!url){
                dispatch(action)
            }else{
                // 显示loading
                dispatch({
                    type:constants.REQUESTING
                })
                // 请求
                http[method](url,data).then(res=>{
                    dispatch({
                        type:constants.REQUESTED,
                        data:res.data,
                        name
                    })
                }).catch(error=>{
                    dispatch({
                        type:constants.REQUESTERROR,
                        error:error
                    })
                })
            }

        }
    }
}