// 用户行为层

import * as constants from './constants.js' 
export default {
    // 增加
    increment(){
        return {
            type:constants.ADD
        }
    },
    decrement(){
        return {
            type:constants.MINUS
        }
    },
    getData(){
        return {
            type:constants.AJAX,
            url:'https://cnodejs.org/api/v1/topics?page=1&limit=10'
        }
    }
}