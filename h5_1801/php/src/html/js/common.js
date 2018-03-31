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
    // 记录动画的数量
    let timerLen = 0;


    // 遍历opt，获取所有attr和target
    for(var attr in opt){
        timerLen++;

        createTimer(attr);
    }
    
    
    function createTimer(attr){
        let target = opt[attr];

        // 设置定时器的名字与attr关联
        let timerName = attr + 'timer';//widthtimer,heighttimer,toptimer


        // 清除定时器，避免多个定时器用作于一个效果
        clearInterval(ele[timerName]);

        ele[timerName] = setInterval(()=>{
            // 获取当前值
            let current = getCss(ele,attr);//100px,45deg,0.5(string)

            // 提取单位
            let unit = current.match(/[a-z]+$/i);//[0:px,index:6,input:current],null

            // 三元运算实现提取单位
            unit = unit ? unit[0] : '';

            // 提取值
            current = parseFloat(current);

            // 计算缓冲速度
            let speed = (target-current)/10;//0.5=>1,-0.5=>-1


            // 避免速度为小数
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);//1,-1

            // 针对opacity进行操作
            if(attr === 'opacity'){
                speed = speed>0 ? 0.05 : -0.05;
            }

            // 根据速度改变当前值
            current += speed;


            // 当到达目标指时
            if(current === target || speed === 0){
                clearInterval(ele[timerName]);

                // 避免超出target的范围
                current = target;

                // 每一个动画完成数量减一
                timerLen--;

                //动画结束后执行回掉函数
                // if(timerLen===0 && typeof callback === 'function'){
                //  callback();
                // }

                if(timerLen === 0){
                    typeof callback==='function' && callback();
                }
            }


            ele.style[attr] = current + unit;
        },30);
    }
}

function ajax(options){


	var defaults = {
		type:'get',//post,put,delete,jsonp
		async:true,//异步与同步
		// data:{},
		// success:function(){}
		status:[200,304],
		callbackName:'callback',//jsonp请求参数
	}

	var opt = Object.assign({},defaults,options);

	// 处理大小写
	opt.type = opt.type.toLowerCase();

	// 根据type确定参数类型
	// {page:1,qty:10}-> 'page=1&qty=10'
	var params = '';
	if(opt.data){
		for(var key in opt.data){
			params += key + '=' + opt.data[key] + '&'
		}

		// 清除多余&
		// page=1&qty=10& -> page=1&qty=1
		params = params.slice(0,-1);
	}

	// 请求类型判断
	// get：参数写到url
	// post:写到send()
	if(opt.type === 'get' || opt.type === 'jsonp'){
		// 判断url中是否已经存在?

		opt.url += (opt.url.indexOf('?')>=0 ? '&' : '?') + params;

		// 清空params
		params = null;
	}


	// jsonp请求
	// 生成script标签，并传递全局函数名
	if(opt.type === 'jsonp'){
		var script;
		var fnName = 'getData' + Date.now();
		window[fnName] = function(data){
			// 执行传如的函数
			if(typeof opt.success === 'function'){
				opt.success(data);

				// 清除script标签
				document.body.removeChild(script);
			}
		}

		// 生成script标签
		script = document.createElement('script');
		script.src = opt.url + '&' + callbackName + '=' + fnName;
		document.body.appendChild(script);

		return;
	}



	// 兼容异步请求对象
	var xhr = null;
	try{
	    xhr = new XMLHttpRequest();
	}catch(error){
	    // ie低版本浏览有多种异步请求的实现
	    try{
	        xhr = new ActiveXObject("Msxml2.XMLHTTP");
	    }catch(err){
	        try{
	            xhr = new ActiveXObject("Microsoft.XMLHTTP");
	        }catch(e){
	            alert('你的浏览器太low了，这个世界不适合你');
	        }
	    }
	}

	// 此处不数据处理
	// 只返回数据
	xhr.onload = function(){
		if(opt.status.indexOf(xhr.status)>=0){
			var data = xhr.responseText;//json,string
			try{
				data = JSON.parse(data);
			}catch(error){
				try{
					data = eval('('+ data +')');
				}catch(err){
					data = xhr.responseText;
				}
			}

			// 执行传如的函数
			if(typeof opt.success === 'function'){
				opt.success(data);
			}
		}
	}

	


	xhr.open(opt.type,opt.url,opt.async);

	// post,put,delete
	// 设置请求头Content-Type
	if(opt.type != 'get'){
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}

	xhr.send(params);
}


