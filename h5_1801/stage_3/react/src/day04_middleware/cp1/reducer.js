// 逻辑层:纯函数
import * as constants from './constants.js' 

export default (state = {count:0},action) =>{
    console.log(action);
    // 深复制
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.ADD:
            _state.count = _state.count + 1;
            break;
        case constants.MINUS:
            _state.count = _state.count - 1;
            break;
        case constants.AJAX:
            _state.data = action.data;
            break;
        default:
            _state;
            break;
    }
    return _state;
}