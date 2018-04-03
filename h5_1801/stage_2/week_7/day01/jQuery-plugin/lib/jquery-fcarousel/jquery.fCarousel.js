;(function($){
  // 扩展jQuery方法
  $.fn.fCarousel = function(options){
    // 这里的this指的是jQuery实例对象(类数组)
    // 默认对象：保存属性
    let defaults = {
      width:800,
      height:320,
      index:0,
      duration:3000,
      autoPlay:true,
      type:'vertical',// horizontal,fade
      seamless:false,// 是否为无缝滚动
      page:true// 是否存在分页
    }
    // 使用遍历：不会覆盖实例
    return this.each(function(){
      // 这里的this指的是每一个容器
      let $self = this;
      // 对象合并
      let opt = Object.assign({},defaults,options);

      // 获取图片的数量
      opt.len = opt.imgs.length;
      let $ul;
      // 上一张图的索引值
      let lastIndex = opt.index;

      // 初始化方法：
      //  获取/创建元素
      //  绑定事件
      let init = ()=>{
        // 应用插件的样式
        $self.addClass('fcarousel');
        $self.css({
          width:opt.width,
          height:opt.height
        });

        // 创建图片移动容器ul
        $ul = $('<ul/>');
        // 根据图片数量动态生成图片容器li和图片
        let $res = $.map(opt.imgs,function(url){
          // 生成图片容器
          let $li = $('<li/>');
          let $img = $('<img/>');
          $img.attr('src',url).appendTo($li);

          return $li;
        });
        // 添加到页面
        $ul.append($li);
        $self.append($ul);

        // 水平滚动时必须设置ul的宽度
        if(opt.type === 'horizontal'){
          $ul.width(opt.width * opt.len);
          $ul.addClass('horizontal');
        }
        // 淡入淡出必须设置定位
        else if(opt.type === 'fade'){
          $ul.addClass = 'fade';
          $ul.css({
            width:opt.width,
            height:opt.height
          });
          $ul.children('li').eq(opt.index).siblings('li').css('opacity',0);
        }

        // 鼠标的移入和移除
        $self.on('mouseenter',()=>){
          // 清除定时器
          clearInterval($self.timer);
        }).on('mouseleave',()=>{
          move();
        })
        // 页码事件
        .on('click','.page span',()=>{

        });
      }

      // 动画运动
      let move = function(){
        // 重置索引值
        if(opt.index >= opt.len){
          opt.index = 0;
        }else if(opt.index < 0){
          opt.index = opt.len - 1;
        }

        // 判断运动的类型
        let obj = {};
        if(opt.type === 'vertical'){
          obj.top = -opt.height * opt.index;
          $ul.animate(obj);
        }else if(opt.type === 'horizontal'){
          obj.left = -opt.width * opt.index;
          $ul.animate(obj);
        }else if(opt.type === 'fade'){
          // 当前图片显示
          $ul.children('li').eq(opt.index).animate({opacity:1},function(){
            // 将索引值复制给上一张
            lastIndex = opt.index;
          });
          // 上一张隐藏
          $ul.children('li').eq(lastIndex).animate({opacity:0},function(){
            // 将索引值复制给上一张
            lastIndex = opt.index;
          });
        }

      }

      // 调用实例化方法
      init();
    });
  }
})(jQuery);
