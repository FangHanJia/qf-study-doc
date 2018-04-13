;(function($){
  $.fn.fZoom = function(options){
    console.log(this);
    let defaults = {
      width:320,
      height:200,
      // 放大图片的位置
      position:'right',
      ratio:4,//比例
      // 间距
      gap:20
    }

    // 遍历类数组
    return this.each(function(){
        let opt = $.extend({},defaults,options);

        // 小图片容器
        let $small = $(this);
        let $big;//放大图片
        let $zoom;//放大镜
        let ratio = opt.ratio;//比例
        let $imglist;//小图片列表

        let zoom = {
          // 实例化
          init(){
            // 添加特定类
            $small.addClass('fzoom-small');

            // 图片列表
            $imglist = $small.next();
            $imglist.addClass('fzoom-imglist');
            let $smallImg = $small.children('img');
            // 创建大图容器
            $big = $('<div/>').addClass('fzoom-big');
            let $bigImg ;
            $bigImg = $('<img/>').attr('src',$smallImg.data('big'));
            $bigImg.appendTo($big);

            // 小图片点击事件
            $imglist.on('click','li',function(){
              let $currenturl = $(this).find('img').attr('src');
              console.log($currenturl);
              $smallImg.attr('src',$currenturl);
              // 大图片
              $bigImg = $('<img/>').attr('src',$currenturl);
              $bigImg.appendTo($big);

            });

            // 小图片
            $small.css({width:$smallImg.width()})
            let left,top;
            if(opt.position =='right'){
                top  = $small.offset().top;
                left = $small.offset().left + $smallImg.outerWidth()+opt.gap;
            }else if(opt.position == 'bottom'){
                left = $small.offset().left;
                top  = $small.offset().top + $smallImg.outerHeight() + opt.gap;
            }else if(opt.position =='left'){
                top = $small.offset().top;
                left = $small.offset().left - opt.gap - opt.width;
            }else if(opt.position == 'top'){
                left = $small.offset().left;
                top = $small.offset().top - opt.height - opt.gap;
            }
            // 大图片
            // 设置样式
            $big.css({
              width:opt.width,
              height:opt.height,
              top:top,
              left:left
            });
            // 添加到界面
            // $bigImg.appendTo($big);
            $big.appendTo('body');

            // 放大镜
            $zoom = $('<div/>').addClass('zoom');
            $zoom.appendTo($small);

            // 鼠标移入移除事件
            $small.on('mouseenter',function(){
              zoom.show();
              // 有大图的情况
                if($bigImg[0].complete){
                  ratio = $bigImg.width()/$smallImg.width();
                }else{
                  $bigImg[0].onload = function(){
                    ratio = $bigImg.width()/$smallImg.width();
                  }
                }

              //设置放大镜样式
              $zoom.css({
                width:opt.width/ratio,
                height:opt.height/ratio
              });

            }).on('mouseleave',function(){
              zoom.hide();
            }).on('mousemove',function(e){
              let x = e.pageX - $small.offset().left - $zoom.outerWidth()/2;
              let y = e.pageY - $small.offset().top - $zoom.outerHeight()/2;

              // 边界判断
              if(x < 0){
                x=0;
              }else if(x >= $smallImg.innerWidth() -$zoom.innerWidth()){
                x = $small.outerWidth() -$zoom.outerWidth();
              }
              if(y<0){
                y = 0;
              }else if(y >= $smallImg.innerHeight() - $zoom.innerHeight()){
                y =  $smallImg.innerHeight() - $zoom.innerHeight();
              }

              $zoom.css({
                left:x,
                top:y
              });
              $bigImg.css({
                left:-x*ratio,
                top:-y*ratio
              });
            })


          },

          // 移动
          move(){},

          // 显示
          show(){$big.fadeIn();$zoom.show();},
          // 隐藏
          hide(){$big.fadeOut();$zoom.hide();}
        }

        // 调用
        zoom.init();
    });

  }
})(jQuery);
