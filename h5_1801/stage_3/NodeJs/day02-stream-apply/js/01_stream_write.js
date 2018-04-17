// stream流接口的写入
// 引入模块：基于fs模块操作
const fs = require('fs');

//要写入的文件
let data = '这是一个测试stream写入的文件';

// 1、创建写入流:创建路径
let writeStream = fs.createWriteStream('./01_test2.txt');

// 2、设置写入编码
writeStream.write(data,'UTF8');

// 3、完成流事件
writeStream.on('finish',function(){
    console.log('finished');
});

// 错误流事件
writeStream.on('error',function(){
    console.log('fail');
});