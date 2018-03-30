/**
 * 弹窗插件
 */
 function Popover(options){
   // 默认属性
   var defaults = {
     width:600,
     height:'auto',
     position:'center',
     title:'弹窗标题',
     content:'',
     draggable:true,
     overlay:0.3
   }
   // 扩展默认参数:将形参对象和默认对象进行拼接
   var opt = Object.assign({},defaults,options);//返回opt对象；
   this.position = opt.position;//有可能是一个对象
   // 对象初始化
   this.init(opt);
 }

 // 原型对象方法：
 Popover.prototype = {
   // 初始化：创建/获取元素(函数简写init:function(){}==>init(){})
   init(opt){
     // 创建弹窗
     this.ele = document.createElement('div');
     this.ele.className = 'popover';

     // 弹窗宽高
     this.ele.style.width = opt.width +'px';
     // 判断高度是否存在
     if(typeof opt.height == 'number'){
       this.ele.height = opt.height +'px';
     }

     // 创建标题
     if(opt.title){
       var title = document.createElement('div');
       title.calssName = 'title';
       title.innerHTML = opt.title;

       this.ele.appendChild(title);
     }

     // 创建内容
     var content = document.createElement('div');
     content.calssName = 'content';
     content.innerHTML = opt.content;
     this.ele.appenChild(content);

     //删除按钮
     var btnClose = document.createElement('span');
   },

 }
