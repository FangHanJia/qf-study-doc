// stream 流接口的读取
// 引入模块:在文件模块的基础上进行操作
const  fs = require('fs');
let data = '';
// 1、创建读取流:文件路径
let readStream = fs.createReadStream('01_test.txt');

// 设置编码
readStream.setEncoding('UTF8');

// 流操作
readStream.on('data',function(_data){
    data += _data;
});

// 结束流
readStream.on('end',function(){
    console.log(data);
});

//  错误流提示
 readStream.on('error',function(){
    console.log('fail');
 });