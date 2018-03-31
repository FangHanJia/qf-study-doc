window.onload = function(){
    /**
     * 首页轮播图
     */
    var loop     = document.getElementById('loop');
    var imgBox   = document.getElementById('imgBox');
    var buttons  = document.getElementById('buttons').getElementsByTagName('span');
    var l_prev   = document.getElementById('l_prev');
    var l_next   = document.getElementById('l_next');
    var index    = 1;
    var animated = false;
    var loopTimer;

    // 按钮的显示，索引从0开始
    function showButtons(){
        // 遍历清除className
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index-1].className = "on";
    }
    // 移动函数
    function l_animate(l_offset){
        animated = true;
        var leftDistance = parseInt(imgBox.style.left) + l_offset ;
        var l_time         = 350;//位移总时间
        var l_intaval      = 10;//位移间隔
        var l_speed        = l_offset/(l_time/l_intaval);//位移量

        //动画函数
        function leftRun(){
            if((l_speed<0&&parseInt(imgBox.style.left)>leftDistance) || (l_speed>0&&parseInt(imgBox.style.left)<leftDistance) ){
                imgBox.style.left =parseInt(imgBox.style.left) +l_speed +'px';
                //函数自己调用自己-递归函数
                setTimeout(leftRun,l_intaval);
            }
            else{
                animated = false;
                if(leftDistance> -770){
                    imgBox.style.left = -3080 +'px';
                }
                if(leftDistance < -3080){
                    imgBox.style.left = -770 +'px';

                }
            }
        }
        leftRun();
    }
    // 左右箭头的点击事件
    l_prev.onclick = function(){
        if(index == 1){
            index = 4;
        }else{
            index -=1;
        }
        showButtons();
        if(!animated){
            l_animate(770);
        }

    }
    l_next.onclick = function(){
        if(index == 4){
            index = 1;
        }else{
            index +=1;
        }
        showButtons();
         if(!animated){
            l_animate(-770);
        }
    }
    // 按钮的点击事件
    for(var j = 0;j < buttons.length;j++){
        buttons[j].onclick = function(){
            if(this.className=="on"){
                return
            }
            var myIndex   = parseInt(this.getAttribute('index'));
            var l_offset  =-770* (myIndex - index);
            if(!animated){
                l_animate(l_offset);
            }
            index = myIndex;
            showButtons();
        }
    }
    // 轮播自动播放
    function play(){
        loopTimer = setInterval(function(){
            l_next.onclick(); 
        },2500);
    }
    //轮播图停止播放
    function stop(){
        clearInterval(loopTimer);
    }
    loop.onmouseover = stop;
    loop.onmouseout  = play;
    play();

    /**
     * New 产品切换
     */
    //获取元素
    var newContainer = document.getElementById('newContainer');
    var newUl = document.getElementById('newUl');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var runed = false;

    // 移动动画的函数
    function animate(offset){
        runed = true;
        var newLeft = parseInt( newUl.style.left)+offset;
        var time    = 300;//位移总时间
        var intaval = 10;//位移间隔
        var speed   = offset/(time/intaval);//位移量

        //位移动画
        function go(){
            if( (speed < 0 && parseInt(newUl.style.left) > newLeft) || (speed > 0 && parseInt(newUl.style.left)  < newLeft) ){
                newUl.style.left =  parseInt(newUl.style.left) + speed + 'px';
                //位移间隔-使用递归函数(自己调用自己)
                setTimeout(go,intaval); 
                console.log("hh");
            }else{
                runed = false;
                newUl.style.left =  newLeft+'px';
                if( newLeft > 0){
                    newUl.style.left = -1400 + 'px';
                } 
                if( newLeft < -1400){
                    newUl.style.left = 0 + 'px';
                    return;
                }
                    console.log("jj");

                }

        }
        go();

       
    }
    //按钮绑定事件
    next.onclick = function(){
        if(!runed){
            animate(-700);
        }
    } 
    prev.onclick = function(){
        if(!runed){
            animate(700);
        }
    }

    /**
     * 首页的点击回到顶部效果
     */
    //获取toTOP按钮属性
    var toTOP = document.getElementById('toTOP');
    var live  = document.getElementById('live');
    
    //触发滚动条函数，隐藏或显示按钮
    window.onscroll = function(){
        // 获取滚动条滚动距离
        var scrollHeight = window.scrollY; 

        console.log(scrollHeight);
        if(scrollHeight>=700){
            live.style.display = 'block';

        }else{
            live.style.display = 'none';
        }
        //onsroll事件会覆盖。
        scrollHead();
    }
    //给按钮绑定事件
    toTOP.onclick = function(){
        timer = setInterval(function(){
            var speed = parseInt(window.scrollY/4);

            //判断当滚动距离为0时，停止滚动
            if(speed<=0){
                speed=0;
                clearInterval(timer);
                scrollTo(0,0);
            }
            //设置滚动距离
            scrollBy(0,-speed);
            console.log(speed);
        },30);
    }
    
    /**
     * 首页头部吸顶
     */
    //获取元素
    var head = document.getElementById('head');
    //封装一个触发滚动条函数
    function scrollHead(){
        //获取滚动距离
        var sHeight = window.scrollY;
        console.log(sHeight);
        //获取头部高度
        var headHeight = head.offsetHeight;
        if(sHeight>=headHeight){
            head.className = 'fix';
        }else{
            head.className = '';
        }
    }
   
}
