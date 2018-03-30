/**
 * [生成任意范围内随机整数的函数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 */
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1))+min;
}


/**
 * [生成随机颜色函数]
 * @return {String} [返回rgb格式颜色]
 */
function randomColor(){
	// 16进制：#ddd
	// rgb(255,222,66);

	// var r = parseInt(Math.random()*256);
	// var g = parseInt(Math.random()*256);
	// var b = parseInt(Math.random()*256);

	// 使用其它封装
	var r = randomNumber(0,255);
	var g = randomNumber(0,255);
	var b = randomNumber(0,255);


	return 'rgb(' + r + ',' + g + ',' + b + ')';//rgb(225,225,88)
}

/**
 * [生成16进制随机颜色函数]
 * @return {String} [返回16进制格式颜色代码]
 */
function rColor(){
	var str = '0123456789abcdef';//15

	var res = '#';

	for(var i=0;i<6;i++){
		res += str[parseInt(Math.random()*str.length)];
	}

	return res;
}


var Element = {
	/*
		获取元素（过滤文本节点）
	 */
	get:function(nodes){
		var res = [];

		// 遍历所有节点
		for(var i=0;i<nodes.length;i++){
			// 找出元素节点并写入res
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}

		// 返回元素节点
		return res;
	},

	// 传入一个元素，获取它的子元素
	children:function(ele){
		var nodes = ele.childNodes;

		var res = [];

		for(var i=0;i<nodes.length;i++){
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}

		return res;
	},
	// 获取前一个元素节点
	next:function(ele){},

	// 获取后一个元素节点
	prev:function(ele){

	},

	// 把new 插入old的后面
	insertAfter:function(newNode,old){

	}
}

// Element.get(list.childNodes);//7->3

/**
 * [获取元素样式，兼容IE8-]
 * @param  {Element} ele [获取样式的元素]
 * @param  {String} key [css属性]
 * @return {String}     [返回key对应的属性值]
 */
function getCss(ele,key){
	// 思路：判断浏览器是否支持这个方法
	if(window.getComputedStyle){
		// 标准浏览器
		return getComputedStyle(ele)[key]
	}else if(ele.currentStyle){
		// IE8-
		return ele.currentStyle[key]
	}else{
		// 
		return ele.style[key]
	}
}

// getCss(box,'font-size');//16px

/**
 * [绑定事件函数，兼容IE8-]
 * @param  {Element}  ele       [绑定事件的元素]
 * @param  {String}  type      [事件名]
 * @param  {Function}  handler   [事件处理函数]
 * @param  {[Boolean]} isCapture [是否捕获]
 */
function bind(ele,type,handler,isCapture){
	// 优先使用事件监听器
	if(ele.addEventListerner){
		// 标准浏览器
		ele.addEventListerner(type,handler,isCapture);
	}else if(ele.attachEvent){
		// IE8-
		ele.attachEvent('on' + type,handler);
	}else{
		// DOM节点绑定方式
		ele['on' + type] = handler;
	}
}

// bind(ele,'click',function(){},true);


/*
	Cookie操作
	* 增
	* 删
	* 查
	* 改
 */
var Cookie = {
	/**
	 * [获取cookie]
	 * @param  {String} key [cookie名]
	 * @return {String}      [返回cookie自]
	 */
	get:function(key){
		// 先获取所有cookie
		var cookies = document.cookie;
		if(cookies.length === 0){
			return '';
		}

		// 拆分每一个cookie
		cookies = cookies.split('; ');

		for(var i=0;i<cookies.length;i++){
			// 拆分key,value
			var arr = cookies[i].split('=');

			if(arr[0] === key){
				return arr[1];
			}
		}
	},

	/**
	 * [设置/修改cookie]
	 * @param {String} key   [cookie名]
	 * @param {String} value [cookie值]
	 * @param {[Date]} date  [有效期，必须为Date类型]
	 * @param {[String]} path  [cookie保存路径]
	 */
	set:function(key,value,date,path){
		var str = key + '=' + value;

		// 有效期
		if(date){
			str += ';expires=' + date.toUTCString();
		}

		// 路径
		if(path){
			str += ';path='+path;
		}

		document.cookie = str;
	},

	/**
	 * [删除cookie]
	 * @param  {String} key [cookie名]
	 * @param {[String]} path     [cookie保存的路径]
	 */
	remove:function(key,path){
		var d = new Date();
		d.setDate(d.getDate()-1);

		// document.cookie = key + '=x;expires=' + d.toUTCString();
		this.set(key,'x',d,path);
	},

	// 清空cookie
	clear:function(){

	}
}
/**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {Object} opt   [动画属性集合]
 * @param  {Function} callback   [回调函数]
 */
function animate(ele,opt,callback){
	//如何确定哪个属性是最后完成的动画
	
	//动画数量
	var timerQty = 0;

	//遍历属性
	for(var attr in opt ){
		createTimer(attr);
		timerQty++;
	}

	function createTimer(attr){
		//根据属性定义定时器的名字
		var timerName = attr + 'timer';

		//获取目标值
		var target = opt[attr];

		clearInterval(ele[timerName]);
		ele[timerName] = setInterval(function(){
			//获取当前值
			var current = getCss(ele,attr);

			//提取单位,正则匹配返回一个数组。
			var unit = current.match(/[a-z]+$/);
			unit = unit ? unit[0] : '';

			//提取值
			current = parseFloat(current);

			//计算速度 （最小变化值：1/-1）
			//避免速度为0
			var speed = (target - current)/10;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			current +=speed;
			//针对opacity属性计算速度
			if(attr === 'opacity'){
				speed = speed>0 ? 0.01 : -0.01;
			}
			
			//到达目标值后清除动画定时器
			if(current === target || speed === 0){
				clearInterval(ele[timerName]);

				//重置目标值
				current = target;

				//动画完成数量减一
				timerQty--;

				//执行回调函数
				if(timerQty === 0 && typeof callback === 'function'){
					callback();
				}
			}

			ele.style[attr] = current + speed + unit;
		},30);
	}
}


