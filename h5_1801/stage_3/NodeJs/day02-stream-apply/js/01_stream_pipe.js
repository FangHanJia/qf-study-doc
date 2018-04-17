// 管道流：读取和写入文件
// 引入模块：基于fs模块
const fs = require('fs');

// 1、创建可读取流
let readStream = fs.createReadStream('01_test.txt');

// 2、创建可写入流:覆盖
let writeStream = fs.createWriteStream('01_test2.txt',{'flags':'a'}); 

// 管道流方法pipe();
readStream.pipe(writeStream);

console.log('finish');