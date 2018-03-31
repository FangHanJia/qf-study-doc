document.addEventListener('DOMContentLoaded',function(){
    /**
     * 第一周：方汉佳
     *     1、首页轮播图
     */
    (function(){
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
    })();

    // 第五周：方汉佳
    //      1、ajxa获取后台数据
    (function(){
       
        // 发起请求 
        let brand = document.querySelector('.brand');
        // let url = 'data/index.json';
        let url = 'api/index.php';
        let xhr = new XMLHttpRequest();
        let status = [200,304];
        xhr.onload = function(){
            if(status.includes(xhr.status)){
                // 接收后端数据
                let data_res = JSON.parse(xhr.responseText);
                /*
                    品牌区域数据
                */
                brand.innerHTML  = data_res.brand.map(item=>{
                    return `<li>
                                <img src=${item.imgurl}  class="imgurl"/>
                                <span class="name"> ${item.name} </span>
                                <div class="box">
                                    <span class="name">${item.name} </span> <br />
                                    <span class="text"> ${item.content} </span>
                                </div>
                            </li>`;
                }).join('');
                // 获取品牌列表
                 let brand_lis = document.querySelectorAll('.brand li');
                 let box = document.querySelectorAll('.brand .box');
                // 列表绑定事件
                for(let i=0;i<brand_lis.length;i++){
                    brand_lis[i].onmouseenter = function(){
                        animate(box[i],{bottom:0});
                        brand_lis[i].className = 'cover';
                    }
                    brand_lis[i].onmouseleave = function(){
                        animate(box[i],{bottom:-80});
                        brand_lis[i].className = '';
                    }
                }
                /*
                   商品区域数据
                */
               // new 商品
                let newContainer = document.querySelector('#newContainer');
                // 创建Ul
                let new_ul = document.createElement('ul');
                new_ul.className = 'new_ul clearfix';
                new_ul.id = 'newUl';
                new_ul.style.left = 0+'px';
                new_ul.innerHTML = '';
                new_ul.innerHTML = data_res.goodlist.map(item=>{
                    let save = item.listprice*1 - item.ourprice*1;
                    return `
                        <li>
                            <img src=${item.imgurl} class="good_pic"/>
                            <p class="good_text">${item.content}</p>
                            <p>List Price:<span>USD ${item.listprice}</span></p>
                            <p>Our Price: <span>$ ${item.ourprice}</span></p> 
                            <p class="good_save">Save $${save}</p>
                        </li>`;
                }).join('');
                // 添加到界面
                newContainer.appendChild(new_ul);

                // 商品切换
                var newUl = document.getElementById('newUl');
                var prev = document.getElementById('prev');
                var next = document.getElementById('next');

                var runed = false;

                // 移动动画的函数
                function g_animate(offset){
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
                        }else{
                            runed = false;
                            newUl.style.left =  newLeft+'px';
                            if( newLeft > 0){
                                newUl.style.left = -1400 + 'px';
                            } 
                            if( newLeft < -1400){
                                newUl.style.left = 0 + 'px';
                            }

                        }

                    }
                    go();
                }
                //按钮绑定事件
                next.onclick = function(){
                    if(!runed){
                        g_animate(-700);
                    }
                } 
                prev.onclick = function(){
                    if(!runed){
                        g_animate(700);
                    }
                }



                // top商品
                let goodlist = document.querySelector('#goodlist');
                // 创建Ul
                let top_ul = document.createElement('ul');
                top_ul.className = 'new_ul clearfix';
                top_ul.id = 'newUl';
                top_ul.style.left = 0+'px';
                top_ul.innerHTML = '';
                top_ul.innerHTML = data_res.goodlist.map(item=>{
                    let save = item.listprice*1 - item.ourprice*1;
                    return `
                        <li>
                            <img src=${item.imgurl} class="good_pic"/>
                            <p class="good_text"> ${item.content} </p>
                            <p>List Price:<span>USD ${item.listprice}</span></p>
                            <p>Our Price: <span>$ ${item.ourprice}</span></p> 
                            <p class="good_save">Save $${save}</p>
                        </li>`;
                }).join('');
                // 添加到界面
                goodlist.appendChild(top_ul);

               
                /*
                    top designer
                 */
                let more = document.querySelector('#more');
                // 创建ul
                let more_ul = document.createElement('ul');
                more_ul.className = 'more_ul';
                let html = '';
                for(let i=0;i<data_res.designer.length;i++){
                    if(i==0){
                        let item = data_res.designer[i];
                        html +=  `<h3>
                            <img src=${item.imgurl} class="img_more"/> 
                            <span class="top">${item.top}  </span>
                            <a href="#" class="fr right">${item.more} ></a>
                        </h3>`;
                    }else{
                        let item = data_res.designer[i];
                        html += `<li>
                                <img src=${item.imgurl}   class="fl img_more"/>
                                <a href="#" class="title">${item.title}</a>
                                <p class="text"> ${item.content}</p>
                            </li>`;
                       
                    }
                }
                more_ul.innerHTML = html;
                more.appendChild(more_ul);
            }

        }
        xhr.open('get',url,true);
        xhr.send();
    })();

    /**
     * 第三周:方汉佳
     *      1、首页的点击回到顶部效果
     *      2、首页头部吸顶
     */
    (function(){
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
            //获取头部高度
            var headHeight = head.offsetHeight;
            if(sHeight>=headHeight){
                head.className = 'fix';
            }else{
                head.className = '';
            }
        }
    })();
    

    /**
     * 第二周：方汉佳
     *   1、将传进来的数据保存到cookie中，路劲为根目录path=/ 
     *   2、顶部加载cookie的函数
     */
  
    (function(){
        //获取购物车点击的按钮
        var add2car = document.getElementById('add2car');
        var tips = document.getElementById('tips');
        //获取cookie
        var goodslist = Cookie.get('goodslist') || [];
            if(typeof goodslist === 'string'){
                goodslist = JSON.parse(goodslist);
            }
        //顶部购物车获取元素
        var sub = document.getElementById('subtotal');
        var topCount = document.getElementById('topCount');
        var topPrice = document.getElementById('topPrice');
        var btnCheckOut = document.getElementById('btnCheckOut');
        var goodsCart = document.getElementsByClassName('goodsCart')[0];
        console.log(goodslist);
        //将数据显示在顶部购物车
        var ulCart = document.createElement('ul');
        ulCart.className = 'erji2';
        var subtotal = 0;
        var topQty = 0;
        ulCart.innerHTML = goodslist.map(function(goods){
            subtotal += goods.ourPrice*goods.qty;
            topQty += Number(goods.qty);
            var imgUrl = goods.img.slice(3);
            return '<li><img src="'+imgUrl+'"/><p class="text">'+goods.text+'</p><p class="price">$'+goods.ourPrice+'&times;'+goods.qty+'</p></li>';
        }).join(''); 
        //写入前先清空
        goodsCart.innerHTML = '';
        goodsCart.appendChild(ulCart);
        sub.innerHTML = '$'+subtotal;
        topCount.innerHTML = topQty +' Items';
        topPrice.innerHTML = '$'+subtotal;
        //购物车跳转
        btnCheckOut.onclick = function(){
            location.href="html/shoppingCart.html";
        }
    })();
});
