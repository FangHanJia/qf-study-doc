/**
 * 弹窗插件
 */
 // 父类构造函数
 function Popover(options){
   // 默认属性
   var defaults = {
     width:600,
     height:'auto',
     position:'center',
     title:'弹窗标题',
     content:'',
     draggable:true,
     overlay:false
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

// 继承父类构造函数
function Confirm(options){
  // 默认属性
  var defaults = {
    width:300,
    title:'这是标题',
    content:'你确定要执行这个操作吗？',
    overlay:false,
    cancel:function(){
      console.log('已关闭');
    },
    confirm:function(){
      console.log('已经执行');
    }
  }
  var opt = Object.assign({},defaults,options);
  Popover.call(this,opt);
}

// 继承父类的方法
Confirm.prototype = Object.create(Popover.prototype);

// 添加/重置方法：
Confirm.prototype.init = function(opt){
  // 创建弹窗div
	this.ele = document.createElement('div');
	this.ele.className = 'popover';

	// 弹窗宽高
	this.ele.style.width = opt.width + 'px';
	if(typeof opt.height === 'number'){
		this.ele.style.height = opt.height + 'px';
	}

  // 内容部分
  var content = document.createElement('div');
	content.className = 'content';
	content.innerHTML = opt.content;
	this.ele.appendChild(content);

  if(opt.overlay !=false){//使用遮罩效果
    // 创建遮罩层
     this.bg = document.createElement('div');
     this.bg.className = 'overlay';
     this.bg.style.opacity = opt.overlay;
     document.body.appendChild(this.bg);
  }
  // 弹出写入页面
  document.body.appendChild(this.ele);

	// 关闭按钮
	var btnClose = document.createElement('span');
	btnClose.className = 'btn-close';
	btnClose.innerHTML = '&times;';
	this.ele.appendChild(btnClose);

	// 关闭按钮事件
	btnClose.onclick = function(){
		this.close();
	}.bind(this);


  // 重置父类的属性或方法
  // 添加确认取消按钮
	this.confirmBtn = document.createElement('button');
	this.confirmBtn.className = 'btn-confirm';
	this.confirmBtn.innerText = '确认';
  // 添加取消按钮
	this.cancelBtn = document.createElement('button');
	this.cancelBtn.className = 'btn-cancel';
	this.cancelBtn.innerText = '取消';
  // 写入界面
	this.ele.appendChild(this.confirmBtn);
	this.ele.appendChild(this.cancelBtn);

  // 确认按钮事件
  this.confirmBtn.onclick = ()=>{
    opt.confirm();
    this.close();
  }
  // 取消按钮事件
  this.cancelBtn.onclick = ()=>{
    opt.cancel();
    this.close();
  }

	// 弹窗写入页面
	// 并显示弹窗
	document.body.appendChild(this.ele);
	this.show();

	// 拖拽
	if(opt.draggable){
		this.drag();
	}

	return this;

}
