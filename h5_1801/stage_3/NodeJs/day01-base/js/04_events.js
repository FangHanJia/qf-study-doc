// 引入events模块
const events = require('events');

// 实例化
let eventsEmitter = new events.EventEmitter();

// 绑定事件
eventsEmitter.on('test',function(){
    console.log('test');
});

// 触发事件
eventsEmitter.emit('test');