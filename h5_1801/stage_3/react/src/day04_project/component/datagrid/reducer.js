// 逻辑层：纯函数

import * as ajax from './constants.js'
export default (state = {},action)=>{
    // 深度克隆
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ajax.REQUESTING:
            _state.loading = true;
            break;
        case ajax.REQUESTED:
            _state.loading = false;
            if(action.name){
                _state[action.name] = _state[action.name] || {}
                _state[action.name].data = action.data;
            }else{
                _state.data = action.data;
            }
            break;
        default :
            _state;
            break;
    }
    return _state;
}