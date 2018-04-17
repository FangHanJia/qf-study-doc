// 链式流：用于文件的压缩和解压

// 引入模块:fs zlib
const fs = require('fs');
const zlib = require('zlib');

// 1、读取文件
fs.createReadStream('01_test2.txt')
// 2、压缩
.pipe(zlib.createGzip())
// 3、写入保存
.pipe(fs.createWriteStream('02_links_test.zip'));
console.log('success');
