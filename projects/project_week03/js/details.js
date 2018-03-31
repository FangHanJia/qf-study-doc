document.addEventListener("DOMContentLoaded",function(){
    /**
     * 点击回到顶部效果、吸顶效果
     */
    (function(){
        //获取toTOP按钮元素
        var toTOP = document.getElementById('toTOP');
        var live  = document.getElementById('live');
        
        window.onscroll = function(){
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
                }
                //设置滚动距离
                scrollBy(0,-speed);
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
    


    //点击事件
    //获取元素
    var lis1 = document.getElementById('size').getElementsByTagName('li');
    var lis2 = document.getElementById('color').getElementsByTagName('li');
    var indx = 0;
    click(lis1);
    click(lis2);

    //调用清除样式函数
    clear(lis1,indx,'cover');
    clear(lis2,indx,'cover');

    //封装一个点击事件
    function click(lis){
        for(var i = 0; i<lis.length;i++){
            lis[i].id = i;
            lis[i].onclick = function(){
                if(this.className=='cover'){
                    return
                }
                var idx = parseInt(this.getAttribute('id'));
                indx = idx;
                clear(lis,indx,'cover');
            }
        }
    }
    //接收商品信息
    //接收数据并解码
    var params = decodeURI(location.search.slice(1));
    //空对象
    var obj = {};
    // 变成数组
    var newArr = params.split('&');
    newArr.forEach(function(item){
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    });
    //获取元素
    var pics = document.getElementById('pics');
    var lPrice = document.getElementById('lPrice');
    var oPrice = document.getElementById('oPrice');
    var loopPic = document.getElementById('loopPic');
    var picObj = [{img:'../images/new_pic1.png'},{img:'../images/new_pic2.png'},{img:'../images/new_pic3.png'},{img:'../images/new_pic4.png'},{img:'../images/new_pic4.png'},{img:'../images/new_pic4.png'}];
    //添加接收到的数据（注意属性名的命名要与传进来的属性名一样）显示在页面上
    pics.innerHTML = '<img id="imgID" src="'+obj.img+'"  />';
    lPrice.innerHTML = obj.listprice;
    oPrice.innerHTML = 'USD '+obj.ourprice;


    //商品计算
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    //第三周：方汉佳-价格变量
    var price = parseInt(obj.ourprice);
    var res = num1.value*price;
    console.log(res);
    num2.innerHTML = price + ' ppy6 <span> &times; </span> '+num1.value+' = <span>'+res+' ppy6.</span>';
    num1.oninput = function(){
        //获取输入的值
        // 计算
        if(num1.value <= 1){
            num1.value=1;
            return;
        }
        var res = num1.value*price;
        num2.innerHTML = price + ' ppy6 <span> &times; </span> '+num1.value+' = <span>'+res+' ppy6.</span>';
    }

    //添加传进来的图片
    var imgID = document.getElementById('imgID');
        picObj.unshift({img:obj.img});
    //轮播图片的生成函数
    function render(){
        return picObj.map(function(pic){
        return '<li><img src="'+pic.img+'" /></li>'
        }).join('');
    }

    loopPic.innerHTML = render();
    var picList = document.getElementById('loopPic').getElementsByTagName('li');
    var index = 0;
    console.log(picList);
    clear(picList,index,'liCover');
    //清除样式的函数
    function clear(pList,idx,cover){
        for(var l=0;l<pList.length;l++){
            if(pList[l].className == cover){
                pList[l].className = '';
                break;
            }
        }
        pList[idx].className = cover;
    }
    
    // 给图片添加样式
    for(var k=0;k<picList.length;k++){
        picList[k].id = k;
        picList[k].onclick = function(){
            if(this.className == 'liCover'){
               return;
            }
            var myIdx = parseInt(this.getAttribute('id'));
            index = myIdx;
            clear(picList,index,'liCover');
            imgID.src = picObj[index].img;
        }
    }
    // 轮播图切换
    (function(){
         // 获取元素
        let prev = document.querySelector('#prev');
        let next = document.querySelector('#next');
        let box_loop = document.querySelector('#box_loop');
        let loop_pic = document.querySelector('#loopPic');
        let len = Math.ceil(loop_pic.children.length/5);console.log(len);
        let idx = 0;
        let boxWidth = box_loop.offsetWidth;
        next.onclick = function(){
            idx++;
            go();
        }
        prev.onclick = function(){
            if(idx === 0){
                idx=2;
                loopPic.style.left = -idx*boxWidth + 'px';
            }
            idx--;
            go();
            
        }
        function go(){
            if(idx >=len){
                loopPic.style.left = 0 +'px';
                idx=0;
            }
            animate(loopPic,{left:-idx*boxWidth});
        }
    })();
   

    // tab切换
    var tabs = document.getElementsByClassName('tabs')[0];
     var tabItem = tabs.children[0].children[1].children;
     var tabContent = tabs.children[1].children[0].children[0].children;
     var zongjia = document.getElementById("zongjia");
     var price1 = document.getElementById("price1");
     var price2 = document.getElementById("price2");
     var total = 0;
     var _price1 = price1.innerHTML;
     var _price2 = price2.innerHTML;
     _price1 = Number(_price1);
     _price2 = Number(_price2);
     for(var i=0; i<tabItem.length; i++){
        if(i===0){
            tabItem[i].style.backgroundColor = 'yellow';
        }else{
            tabContent[i].style.display = 'none';
        }
        tabItem[i].index = i;
        tabItem[i].onmouseover = function(){
            
            for(var j=0; j<tabItem.length; j++){
                tabItem[j].style.backgroundColor = "";
                tabItem[this.index].style.backgroundColor = "yellow";
                tabContent[j].style.display = "none";
                tabContent[this.index].style.display = "block";
            }   
        }
     }
   
    zongjia.innerHTML = _price1 + _price2;
    
     
    /**第三周：方汉佳
     * 将传进来的数据保存到cookie中，路劲为根目录path=/
    */
    // 读取cookie的函数
    function readCookie(){
        //获取购物车点击的按钮
        var add2car = document.getElementById('add2car');
        
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
            return '<li><img src="'+goods.img+'"/><p class="text">'+goods.text+'</p><p class="price">$'+goods.ourPrice+'&times;'+goods.qty+'</p></li>';
        }).join(''); 
        //写入前先清空
        goodsCart.innerHTML = '';
        goodsCart.appendChild(ulCart);
        sub.innerHTML = '$'+subtotal;
        topCount.innerHTML = topQty +' Items';
        topPrice.innerHTML = '$'+subtotal;
    }
    readCookie();
    
    //购物车跳转
    btnCheckOut.onclick = function(){
        location.href="shoppingCart.html";
    }
    //添加到购物车
    add2car.onclick = function(){
        var goodslist = Cookie.get('goodslist') || [];
        if(typeof goodslist == 'string'){
            goodslist = JSON.parse(goodslist);
        }
        //判断商品的数量、
        var guid = obj.no;
        var idx;
        var has = goodslist.some(function(g,i){
            idx = i;
            return g.guid === guid;
        });
        if(has){
            //存在相同商品则获取qty
            goodslist[idx].qty = Number(goodslist[idx].qty)+num1.value*1;
        }else{
             //将数据添加到一个对象中
            var good = {
                guid:obj.no,
                img:obj.img,
                listPrice:obj.listprice,
                ourPrice:obj.ourprice,
                text:obj.content,
                qty:num1.value
            }
            goodslist.push(good);
        }
       
        //存储到cookie中，路径为根目录
        document.cookie = 'goodslist='+JSON.stringify(goodslist)+';path=/';
        //添加成功的提示
        var tips = document.getElementById('tips');
        var top=0;
        var img = document.createElement('img');
        // img.src = obj.img;
        img.src = picObj[index].img;
        tips.appendChild(img);
        var timer = setInterval(function(){
            if(top <=-1500){
                top=-1500;
                clearInterval(timer);
                location.reload();
                // readCookie();
            }
            top -= 50;
            tips.style.top = top +'px';
            tips.style.opacity = 1;
        },60);
    }
    // 图片对象
    // function Fly(){
    //     this.tips = '#tips';
    //     this.img = 'img';
    //     this.top = 0;
    //     this.img.src = picOjb[index].img;

    //     this.init();
    // }
    // Fly.protoptype.init = function(){
    //     this.tips = document.querySelector(this.tips);
    //     this.img = document.createElement(this.img);
    //     this.tips.appendChild(this.img);

    //     this.fly();
    // }
    // Fly.prototype.fly = function(){
    //     animate(this.tips,{top:-1500,opacity:1});
    // }
    // 第三周：方汉佳
    

});