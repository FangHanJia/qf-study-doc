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
       title.className = 'title';
       title.innerHTML = opt.title;

       this.ele.appendChild(title);
     }

     // 创建内容
     var content = document.createElement('div');
     content.className = 'content';
     content.innerHTML = opt.content;
     this.ele.appendChild(content);

     //创建关闭按钮
     var btnClose = document.createElement('span');
     btnClose.className = 'btn-close';
     btnClose.innerHTML = '&times;';
     this.ele.appendChild(btnClose);
     // 关闭按钮事件
     btnClose.onclick = function(){
       this.close();
     }.bind(this);
     //将函数this的指向构造函数的this==>实例对象
     // fn.bing(obj);==>将fn的this指向obj;...........

     //遮罩层
     if(opt.overlay !=false){//使用遮罩效果
       // 创建遮罩层
        this.bg = document.createElement('div');
        this.bg.className = 'overlay';
        this.bg.style.opacity = opt.overlay;

        document.body.appendChild(this.bg);
     }
     // 弹出写入页面
     document.body.appendChild(this.ele);
     //显示在页面
     this.show();

     // 是否拖拽
     if(opt.draggable){
       this.drag();
     }

     // 将对象返回出去
   },
   // 关闭函数
   close(){
     this.ele.style.display = 'none';
     if(this.bg){
       this.bg.style.display = 'none';
     }
     return this;
   },
   // 显示函数
   show(){
     // 显示遮罩窗
     this.ele.style.display = 'block';
     // 如果遮罩窗存在，则显示
     if(this.bg){
       this.bg.style.display = 'block';
     }

     // 设置弹窗位置
     this.setPosition();
     return this;
   },
   // 位置函数
   setPosition(x,y){
     // 不过不传参进来这默认使用‘center’；
     if(x===undefined){
       x = (window.innerWidth - this.ele.width)/2;
       y = (window.innerHeight - this.ele.height)/2;
     }else if(typeof this.position ==='object'){
       x = this.position.x;
       y = this.position.y;
     }
     this.ele.style.left = x +'px';
     this.ele.style.top = y +'px';

     return this;
   },
   // 拖拽函数
   drag(){
     // 将对象this指向本身
     var that = this;
     var pop = that.ele;
     this.ele.onmousedown = function(e){
       var ox = e.clientX - pop.offsetLeft;
       var oy = e.clientY - pop.offsetTop;

       // 限定在标题处拖拽
       if(oy>pop.children[0].offsetHeight){
         return;
       }
       document.onmousemove = function(evt){
         var x = evt.clientX - ox;
         var y = evt.clientY - oy;
         that.setPosition(x,y);

         evt.preventDefault();
       }
     }
     document.onmouseup = function(){
       document.onmousemove = null;
     }
     return this;
   }


 }
