// 引入自定义模块
let FunA = require('./01_custom_a.js');

// // 调用模块:FunA
// console.log(FunA.FunA());

// // 调用模块：obj
// console.log(FunA.obj);

// exports调用方式
FunA.a();
console.log(FunA.b);