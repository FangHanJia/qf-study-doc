document.addEventListener('DOMContentLoaded',function(){
    //获取元素
    var goodsCart = document.getElementById('goods');
    var btnCheck = document.getElementById('btnCheck');
    var totalPrice = document.getElementById('totalPrice');
    var clearAll = document.getElementById('clearAll');
    var btnDel = document.getElementsByClassName('btnDel')[0];
    var saveTotal = document.getElementsByClassName('save-total')[0];
    var goodslist ;
    render();
    //获取cookie并显示在界面上的函数
    function render(){
        goodslist = Cookie.get('goodslist') || [];
        if(typeof goodslist=='string' ){
            goodslist = JSON.parse(goodslist);
        }
        console.log(goodslist);
        //将数据显示在界面上
        /**
         * var good = {
                guid:obj.no,
                listPrice:obj.listprice,
                ourPrice:obj.ourprice,
                text:obj.content,
                qty:num1.value
            }
         */
        var ul = document.createElement('ul');
        var total = 0;
        var saves = 0;
        var temp=0;
       
        ul.innerHTML = goodslist.map(function(goods){
            //商品总价格
            total +=goods.ourPrice * goods.qty;
            //商品原价
            var listPrice = goods.listPrice.slice(3);
            //商品现价总价
            var singleTotal = goods.ourPrice*goods.qty;
            //商品原价总价
            temp +=listPrice*goods.qty;
            //商品save
            var singleSave = (listPrice - goods.ourPrice)*goods.qty;
            return '<li data-guid="'+goods.guid+'"><div class="goods-cont fl"><img src="'+goods.img+'"id="pic"/><p class="text">'+goods.text+'</p><p class="id">id:'+goods.guid+'</p><p class="size">Size:Default</p></div><div class="goods-count fl"><div class="qty">'+goods.qty+'<button class="minus">-</button><button class="add">+</button></div><div class="price"> <p><del class="lPrice">'+listPrice+' py6.</del></p> <p ><span class="oPrice">'+goods.ourPrice+' py6.</span></p></div></div><div class="goods-total fr"><p class="total">'+singleTotal+'py6.</p> <p>You Save <span class="save"></span>'+singleSave+'py6.</p><button class="btnDel">&times;</button></div></li>';
        }).join('');
        //写入前先清空
        goodsCart.innerHTML = '';
        goodsCart.appendChild(ul);
        totalPrice.innerHTML = total.toFixed(2) +' py6.';
        saveTotal.innerHTML = (temp -total).toFixed(2)+' py6.';
        console.log(666);
    }
    //对父元素进行事件委托
    goodsCart.onclick = function(e){
        //兼容
        e = e||window.event;
        var target = e.target || e.srcElement;
        //删除每一个商品
        if(target.className == 'btnDel'){
            //获取到当前li
            var currentLi = target.parentNode.parentNode;
            var guid = currentLi.getAttribute('data-guid'); 
            for(var i = 0;i<goodslist.length;i++){
                if(goodslist[i].guid === guid){
                    goodslist.splice(i,1);
                    break;
                }
            }
            //重新写入cookie
            Cookie.set('goodslist',JSON.stringify(goodslist)+';path=/');
            //刷新界面
            render();
            return false;
       }
       //商品数量的减操作
       if(target.className == 'minus'){
            //获取到当前li
            var currentLi = target.parentNode.parentNode.parentNode;
            console.log(currentLi);
            var guid = currentLi.getAttribute('data-guid'); 
            for(var i = 0;i<goodslist.length;i++){
                if(goodslist[i].guid === guid){
                    //商品数量的减一
                    var count = goodslist[i].qty--;
                    //当数量少于等于1时，删除cookie。
                    if(count<=1){
                        goodslist.splice(i,1);
                    }
                    break;
                }
            }
            //重新写入cookie
            Cookie.set('goodslist',JSON.stringify(goodslist)+';path=/');
            //刷新界面
            render();
            return false;
       }
       //商品数量的增加操作
       if(target.className == 'add'){
            //获取到当前li
            var currentLi = target.parentNode.parentNode.parentNode;
            console.log(currentLi);
            var guid = currentLi.getAttribute('data-guid'); 
            for(var i = 0;i<goodslist.length;i++){
                if(goodslist[i].guid === guid){
                    //商品数量的增加
                    var count = goodslist[i].qty++;
                    break;
                }
            }
            //重新写入cookie
            Cookie.set('goodslist',JSON.stringify(goodslist)+';path=/');
            //刷新界面
            render();
            return false;
       }
    }
    //删除所有商品
    clearAll.onclick = function(){
        Cookie.remove('goodslist','/');
        console.log(666);
        render();
        return false;
    }
    //继续购物
    var shopping = document.getElementById('shopping');
    shopping.onclick = function(){
        location.href = 'libiao.html';
        
    }
/*-----------------------金秋--------------------------------------*/

    var goodes=[{
        imgurl:"../images/new_pic7.png",
        cont:"Louis Vuitton Monogram Ver...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    },{
        imgurl:"../images/2.png",
        cont:"Louis Vuitton Monogram Ardos...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    },{
        imgurl:"../images/new_pic8.png",
        cont:"Louis Vuitton Monogram Ardos...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    },{
        imgurl:"../images/4.png",
        cont:"Louis Vuitton Monogram Ardos...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    },{
        imgurl:"../images/5.png",
        cont:"Louis Vuitton Monogram Ardos...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    },{
        imgurl:"../images/6.png",
        cont:"Louis Vuitton Monogram Ardos...",
        listprice:"$2455.00",
        ourprice:"225.99 py6."
    }];


    var goodlis=document.getElementById('goodlis');

    var html='<ul class="ulc">';
 for(var i=0;i<goodes.length;i++){
    var item=goodes[i];
    html+=' <li class="lic">'+
       
        '<img src="'+item.imgurl+'"/>'+

        '<p>'+item.cont+'</p>'+
        '<span class="shan"><del>'+item.listprice+'</del></span>'+
        '<span class="price">'+item.ourprice+'</span>'+
        '<button>Add to</button>'
        '</li>'

}
    html+='</ul >';

    goodlis.innerHTML=html;
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
   
    //给左边按钮绑定点击事件
    prev.onclick=function(){
      var lis=goodlis.querySelectorAll('.lic');
      var uls=document.querySelector('.ulc');
      //复制第一个节点li
      var first=lis[0];console.log(first)
      //删除第一个节点li
      uls.removeChild(lis[0]);
      //在最后位置插入第一个li
      uls.appendChild(first);
   
    }

//同以上
next.onclick=function(){
    var lis=goodlis.querySelectorAll('.lic');
    var uls=document.querySelector('.ulc');
    var last=lis[lis.length-1];
    uls.removeChild(lis[lis.length-1]);
    uls.prepend(last); 
}


});