// 用户行为层
export default {
    // 增加
    increment(){
        return {
            type:'+'
        }
    },
    // 减少
    decrement(){
        return {
            type:'-'
        }
    }
}
