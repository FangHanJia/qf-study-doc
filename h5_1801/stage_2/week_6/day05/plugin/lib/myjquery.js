/**
 * myjQuery插件编写：
    *面向对象的DOM操作
 */

 // ES6的类方法
 calss myjQuery{
   // 初始化操作
   constructor(selector){
     // 传入Element或类数组Array
     if(typeof selector != 'string'){
       if(selector.tagName){
         this.ele = [selector];
       }else{
         this.ele = selector;
       }
       return this;
     }
     // 选择器
     try {
        this.ele = document.querySelector(selector);
     } catch (err) {
        this.ele = [];
        var res = document.getElementByTagName('');

     }
   }
 }
