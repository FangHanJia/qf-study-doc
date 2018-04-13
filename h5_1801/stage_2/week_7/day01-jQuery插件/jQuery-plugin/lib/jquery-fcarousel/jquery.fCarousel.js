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
      let $self = $(this);
      // 对象合并
      let opt = Object.assign({},defaults,options);

      // 获取图片的数量
      opt.len = opt.imgs.length;
      let $ul;
      // 上一张图的索引值
      let lastIndex = opt.index;
      let $page;
      let showAnimate;
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
        $ul.append($res);
        $self.append($ul);

        // 创建分页
        if(opt.page){
          $page = $('<div/>');
          $page.addClass('page');
          $.map(opt.imgs,function(ele,idx){
            // 生成相对应的页码
            let $span = $('<span/>');
            $span.attr('id',idx);
            $span.text(idx+1);
            // 初始化
            if(idx ==0){
              $span.addClass('active');
            }
            $page.append($span);
          });
          // 添加到页面
          $self.append($page);
        }

        // 创建左右箭头
        let $fprev = $('<a/>');
        $fprev.attr('href','javasript:void(0);');
        $fprev.addClass('fprev');
        $fprev.addClass('arrow');
        $fprev.text('<');
        let $fnext = $('<a/>');
        $fnext.attr('href','javasript:void(0);');
        $fnext.addClass('fnext');
        $fnext.addClass('arrow');
        $fnext.text('>');
        // 添加到界面
        $self.append($fprev);
        $self.append($fnext);

        // 水平滚动时必须设置ul的宽度
        if(opt.type === 'horizontal'){
          $ul.width(opt.width * opt.len);
          $ul.addClass('horizontal');
        }
        // 淡入淡出必须设置定位
        else if(opt.type === 'fade'){
          $ul.addClass('fade');
          $ul.css({
            width:opt.width,
            height:opt.height
          });
          $ul.children('li').eq(opt.index).siblings('li').css('opacity',0);
        }

        // 鼠标的移入和移除
        $self.on('mouseenter',()=>{
          // 清除定时器
          clearInterval($self.timer);
        }).on('mouseleave',()=>{
          move();
        })
        // 页码事件
        .on('click','.page span',function(){
          opt.index = $(this).attr('id');
          console.log(opt.index);
          showAnimate();
        })
        // 左右箭头事件
        .on('click','.fprev',function(){
          opt.index--;
          showAnimate();
        }).on('click','.fnext',function(){
          console.log(this);
          opt.index++;
          showAnimate();
        });
        move();
      }

      // 动画运动
      let move = function(){
        // 封一个分页函数
        function page(){
          if(opt.page){
            $page.children('span').removeClass('active');
            $page.children('span').eq(opt.index).addClass('active');
          }
        }
        clearInterval($self.timer);
        $self.timer = setInterval(function(){
          opt.index++;
          showAnimate();
        },opt.duration);
        // 封一个动画函数
        showAnimate = function(){
            // 重置索引值
            if(opt.index >= opt.len){
              opt.index = 0;
            }else if(opt.index < 0){
              opt.index = opt.len - 1;
            }

            // 判断运动的类型
            let obj = {};console.log(opt.type);
            if(opt.type === 'vertical'){
              obj.top = -opt.height * opt.index;
              $ul.animate(obj);
              page();
            }else if(opt.type === 'horizontal'){
              obj.left = -opt.width * opt.index;
              $ul.animate(obj);
              page();
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
              page();
          }
        }

      }

      // 调用实例化方法
      init();
    });
  }
})(jQuery);
