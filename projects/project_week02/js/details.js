window.onload = function(){
    /**
     * 首页的点击回到顶部效果
     */
    //获取toTOP按钮属性
    var toTOP = document.getElementById('toTOP');
    var live  = document.getElementById('live');
    
    //触发滚动条函数，隐藏或显示按钮
    window.onscroll = function(){
        // // 获取滚动条滚动距离
        // var scrollHeight = window.scrollY; 
        // if(scrollHeight>=700){
        //     live.style.display = 'block';

        // }else{
        //     live.style.display = 'none';
        // }
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
                console.log(idx);
                clear(lis,indx,'cover');
            }
        }
    }


    //商品计算
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var price = 119;
    num1.oninput = function(){
        //获取输入的值
        // 计算
        if(num1.value<=0){
            num1.value=0;
        }
        var res = num1.value*price;
        console.log(num1.value);
        num2.innerHTML = price + ' ppy6 <span> &times; </span> '+num1.value+' = <span>'+res+' ppy6.</span>';
    }
    //接收商品信息
    
    //接收数据并解码
    var params = decodeURI(location.search.slice(1));
    console.log(params);
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
    var picObj = [{img:'../images/new_pic.png'},{img:'../images/new_pic2.png'},{img:'../images/new_pic3.png'},{img:'../images/new_pic4.png'}];
    //添加接收到的数据（注意属性名的命名要与传进来的属性名一样）显示在页面上
    pics.innerHTML = '<img id="imgID" src="'+obj.img+'"  />';
    lPrice.innerHTML = 'USD '+obj.listprice;
    oPrice.innerHTML = 'USD '+obj.ourprice;

    //添加传进来的图片
    picObj.unshift({img:obj.img});
    console.log(picObj);
    //轮播图片的生成函数
    function render(){
        return picObj.map(function(pic){
        return '<li><img src="'+pic.img+'" /></li>'
        }).join('');
    }

    loopPic.innerHTML = render();
    var imgID = document.getElementById('imgID');
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
            console.log(this.getAttribute('id'));
            clear(picList,index,'liCover');
            imgID.src = picObj[index].img;
            console.log(picObj[index].img);
        }
    }
    
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
}