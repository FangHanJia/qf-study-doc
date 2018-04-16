// 自定义模块:FunA
function FunA(){
    console.log('我是一个FunA');
}

// 自定义模块:obj
let obj = {name:'tom',age:20};

// 暴露模块:一个
// module.exports = FunA;

// 暴露模块：多个--简写
// module.exports = {FunA,obj};

// 暴露多个：exports

exports.a = FunA;
exports.b = obj;