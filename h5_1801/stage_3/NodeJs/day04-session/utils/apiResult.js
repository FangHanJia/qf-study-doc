// 暴露状态的模块，供其他模块调用
module.exports = function(status, data, message){
    return {status, data, message};
}