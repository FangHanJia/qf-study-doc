// 使用request和cheerio进行网络抓取数据
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

request('http://www.lanrentuku.com/',(err,res,body)=>{
    let $ = cheerio.load(body);
    $('img','.in-ne').each((idx,ele)=>{
        // 获取src
        let src = $(ele).attr('src');
        let name = src.substr(src.lastIndexOf('/') + 1);
        request(src).pipe(fs.createWriteStream(name));
    });
});