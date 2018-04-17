const fs = require('fs');
const request = require('request');

request('http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg').pipe(fs.createWriteStream('./04_test.png'));