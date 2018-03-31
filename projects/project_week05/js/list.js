document.addEventListener('DOMContentLoaded',function(){
    let list_box = document.getElementById('list_box');
    let pi=document.getElementById('pi');
    let de=document.getElementById('de');
    
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function(){

        if(xhr.readyState === 4){

            let resl=JSON.parse(xhr.responseText); 
                    goodes();
                function goodes(){
               list_box.innerHTML=resl.map(item=>{
                return`

                <li data-id="${item.no}">
                <div><img src="${item.img}"></div>
                <p class="cn"><input type="checkbox">${item.content}</p>
                <p class="price"><del>${item.listprice}</del>
                <span>USD${item.ourprice}</span>
                </p>
                <p class="save">${item.save}</p>
                <p>${item.timer}</p>
                </li> `
             }).join('')
           }



           //价格排序
        var change=1;
        pi.onclick=function(){
            if(change==1){
                resl.sort(function(a,b){
                return a.ourprice-b.ourprice;
                });
          
            goodes();
             change=2;
         //li[span].style.background = "url(../img/a2.png)";
            }else if(change==2){
                resl.sort(function(a,b){
                return a.ourprice-b.ourprice;
                }).reverse();
               
                goodes();
                change=1;
            //li[span] .style.background = "url(../img/a1.png)";
       
            } 
        }   
         //时间排序
        var dat = 1;
        de.onclick=function(){
                if(dat==1){
                    for(var i=0;i<resl.length;i++){
                        for(var j=i+1;j<resl.length;j++){
                            if(Date.parse(resl[i].timer)<Date.parse(resl[j].timer)){
                                var res=resl[i];
                                resl[i]=resl[j];
                                resl[j]=res;
                            }
                        }
                    };
                    goodes();  
                    dat = 2;
            }else if(dat ==2){
                for(var i=0;i<resl.length;i++){
                    for(var j=i+1;j<resl.length;j++){
                        if(Date.parse(resl[i].timer)>Date.parse(resl[j].timer)){
                            var res=resl[i];
                            resl[i]=resl[j];
                            resl[j]=res;
                        }
                    }
                };
                goodes();  
                dat = 1;
            }
                                   
        }  
        

        //手风琴效果
         var tabx1 = document.getElementById('tabx1');
         // console.log(tabx1);
         var tabx2 = document.getElementById('tabx2');
         var tabx3 = document.getElementById('tabx3');
         var bsn1 = document.getElementById('bsn1');
         // console.log(bsn1);
         var bsn2 = document.getElementById('bsn2');
         var bsn3 = document.getElementById('bsn3');
         //绑定点击事件
        var dis1 =1;
        bsn1.onclick = function(){
            if(dis1 == 1){
                tabx1.style.display = 'block';

                dis1 = 2;
            }else if(dis1 == 2){
                tabx1.style.display = 'none';
                dis1 = 1;
            }
        }

        var dis2 =1;
        bsn2.onclick = function(){
            if(dis2 == 1){
                tabx2.style.display = 'block';

                dis2 = 2;
            }else if(dis2 == 2){
                tabx2.style.display = 'none';
                dis2 = 1;
            }
        }

        var dis3 =1;
        bsn3.onclick = function(){
            if(dis3 == 1){
                tabx3.style.display = 'block';

                dis3 = 2;
            }else if(dis3 == 2){
                tabx3.style.display = 'none';
                dis3 = 1;
            }
        }

        //加码数据
        var params ='';
        // console.log(params);
        var lis = document.getElementById('list_box').getElementsByTagName('li');
        // console.log(lis);
        for(var i = 0;i<lis.length;i++){
            lis[i].id = i;
            console.log(lis[i].id);
            lis[i].onclick = function(){
               for(var key in resl[this.id]){
                // console.log(key,resl[this.id][key]);
                params += key + '='+encodeURI(resl[this.id][key])+'&';
               } 
               params=params.slice(0,-1);
                console.log(params);
                // location.href = '01_商品详情页面.html?'+params;
                location.href = 'details.html?'+params;
            }
        }


        }
    }

    xhr.open('get','../api/data/libiao.json',true);
    xhr.send();
   

    

     
     /**第三周：方汉佳
     * 将传进来的数据保存到cookie中，路劲为根目录path=/
     *  var img =obj.img;
     *  var listPrice =obj.listprice;
     *  var ourPrice =obj.ourprice;
     *  var qty = num1;
     *  console.log(img,listPrice,ourPrice,qty);
    */
    //顶部加载cookie的函数
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
    // console.log(goodslist);
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
    //购物车跳转
    console.log(888)  
    btnCheckOut.onclick = function(){
        location.href="shoppingCart.html";
    }
     
   
});

      