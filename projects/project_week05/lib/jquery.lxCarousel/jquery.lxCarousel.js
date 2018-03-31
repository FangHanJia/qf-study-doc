;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		// 如何安全使用$：匿名函数传参
		// 如何获取.box：this=>jquery对象

		// 默认参数
		var defualts = {
			width:320,
			height:320,
			index:0,
			page:true,
			autoPlay:true,

			// 轮播间隔
			duration:3000,

			// 轮播类型
			type:'vertical',//horizontal,fade

			// 无缝滚动
			marquee:true
		}

		return this.each(function(){
			// 这里的this为dom节点
			// var opt = Object.assign({},defualts,options);

			// 比assign强大
			// 能实现深复制
			var opt = $.extend({},defualts,options);
			opt.len = opt.imgs.length;

			var $this = $(this);

			// 添加特定类
			$this.addClass('lx-carousel');

			// 设定样式
			$this.css({
				width:opt.width,
				height:opt.height
			});

			var $ul;

			init();

			var timer;


			// 鼠标移入移除
			$this.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(function(){
					opt.index++;

					show();
				},opt.duration);
			}).trigger('mouseleave');

			// 初始化
			// 获取/生成节点
			// 绑定事件
			function init(){
				$ul = $('<ul/>')

				var html = $.map(opt.imgs,function(url){
					return '<li><img src="'+ url +'"/></li>';
				}).join('\n');

				$ul.html(html);

				$this.append($ul);

			}

			function show(){
				if(opt.index >= opt.len){
					opt.index = 0;
				}else if(opt.index<0){
					opt.index = opt.len-1
				}

				var target = -opt.index*opt.height;

				$ul.animate({top:target});
			}
		
		
		});


		// return this便于链式调用
		// return this;
	}


	// 插件库建议写法
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxDraggable:function(){},

	// 	// 倒计时插件
	// 	lxCountdown:function(){}
	// })

})(jQuery);