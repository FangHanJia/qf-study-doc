// 逻辑层:纯函数
export default (state = 0,action)=>{
    switch(action.type){
        case '+':
            return state + 10;
        case '-':
            return state - 10;
        default:
            return state;
    }
}