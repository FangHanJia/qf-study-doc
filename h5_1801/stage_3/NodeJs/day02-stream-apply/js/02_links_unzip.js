// 链式流的解压
// 引入模块
const fs = require('fs');
const zlib = require('zlib');

// 1、读取压缩文件
fs.createReadStream('02_links_test.zip')
// 2、解压文件
.pipe(zlib.createGunzip())
// 3、写入保存文件
.pipe(fs.createWriteStream('02_links_unzip.txt'));
console.log('success');