// 异步控制流

let sleep = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ok');
        },time);
    });
}

// 1、promise时代
// let start = ()=>{
//     // 返回一个promise对象
//     sleep(1000).then((r)=>{
//         console.log(r);
//     });
// }
// start();

// 2、async时代
// let start = async ()=>{
//     let r = await sleep(1000);
//     console.log(r);
// }
// start();

// 在循环中使用
// let start = async ()=>{
//     for(let i=0;i<3;i++){
//         console.log(i);
//         // 等待一秒
//         let r = await sleep(1000);
//         console.log(r);
//     }
// }
// start();

const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

let spider = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        })
    })
}

let start = async () => {
    let dom = await spider('http://www.lanrentuku.com/');
    let $ = cheerio.load(dom);
    $('img', '.in-ne').each((i, e) => {
        let src = $(e).attr('src');
        let name = src.substr(src.lastIndexOf('/') + 1);
        request(src).pipe(fs.createWriteStream(name))
    })
}

start();