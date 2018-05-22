// 用户行为动态配置

import * as ajax from './constants.js'

// ajax请求
export function refresh(config){
    return {
        type:[ajax.REQURESTING,ajax.REQUESTED,ajax.REQUESTERROR],
        url:config.url,
        data:config.data || {},
        method:config.method || 'get',
        name:config.name
    }
}

// 增加请求
export function add(){
    return {
        type:'+'
    }
}