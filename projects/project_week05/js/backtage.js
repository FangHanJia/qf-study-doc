document.addEventListener("DOMContentLoaded",function(){

    let wish =document.getElementById('wish');
    let hotlist = document.getElementById('hotlist');
    let history = document.getElementById('history');

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4){
            let wishlist = JSON.parse(xhr.responseText);

            let tab = document.createElement('ul');

            tab.innerHTML = wishlist.map(function(item){
                return`<li data-id="${item.no}">
                       <div><img src="${item.img}"></div>
                       <p>${item.content}</p>
                       <p class="price"><del>${item.listprice}</del>
                       <span>USD${item.ourprice}</span></p>
                       </li>`
            }).join('');

            wish.appendChild(tab);

            let tab1 = document.createElement('ul');

            tab1.className = 'tab1';

            tab1.innerHTML = wishlist.map(function(item){
                return`<li data-id="${item.no}">
                       <div><img src="${item.img}"></div>
                       <p>${item.content}</p>
                       <p class="price"><del>${item.listprice}</del>
                       <span>USD${item.ourprice}</span></p>
                </li>`
            }).join('');

            hotlist.appendChild(tab1);

            let tab2 = document.createElement('ul');
            let wishtory = wishlist.slice(0,5);

            tab2.innerHTML = wishtory.map(function(item){
                return`<li data-id="${item.no}">
                       <img src="${item.img}">
                       <div class="pbox"><p>${item.content}</p>
                       <p class="price"><del>${item.listprice}</del>
                       <span>USD${item.ourprice}</span></p></div>
                </li>`
            }).join('');

            history.appendChild(tab2);

            var zuob=document.getElementById('zuob');
            var youb=document.getElementById('youb');
            var ul1 = hotlist.querySelector('.tab1');
            
               //给左边按钮绑定点击事件
                zuob.onclick=function(){
                  var lis=ul1.children;
                  var uls=document.querySelector('.tab1');
                  // 复制第一个节点li
                  var first=lis[0];console.log(first)
                  // 删除第一个节点li
                  uls.removeChild(lis[0]);
                  // 在最后位置插入第一个li
                  uls.appendChild(first);
                }

               //给右边按钮绑定点击事件
               youb.onclick=function(){
                    var lis=tab1.children;
                    var uls=document.querySelector('.tab1');
                    var last=lis[lis.length-1];
                    uls.removeChild(lis[lis.length-1]);
                    uls.prepend(last); 
                } 

        }
    }


    xhr.open('get','../api/data/batage.json',true);
    xhr.send();


//给左右按钮绑定事件
    
    
   
 

    //同以上
    


    // 轮播图
    var banner = document.getElementById('banner');
    var btab1 = document.getElementsByClassName('btab1')[0];
    var btabLis = btab1.children;
    var btab2 = document.getElementsByClassName('btab2')[0];
    var btab2Lis = btab2.children;
    var len = btab2Lis.length;

    //复制第一张图片
    var li = btab1.children[0].cloneNode(true);

    btab1.appendChild(li);


    var banWidth = banner.offsetWidth;

    var timer = setInterval(autoPlay,3000);

    var index = 0;

    btab2.children[0].className = 'ative';


    // 移入移出
      banner.onmouseenter = ()=>{
        clearInterval(timer);
      }

      banner.onmouseleave = ()=>{
        timer = setInterval(autoPlay,3000);
      }

    // 点击分页切换
    banner.onclick = e=>{
      if(e.target.parentNode.className === 'btab2'){
        index = e.target.innerText-2;

        autoPlay();
      }
    }

    function autoPlay(){
        index++;
        if(index > len-1){
            btab1.style.left = 0;
            index = 0;
        }

        animation(btab1,-index*banWidth);


        //页码高亮
        for(let i=0;i<len;i++){
            btab2Lis[i].className = '';

            if(index === 0){
                btab2Lis[0].className = 'ative';
            }else{
                btab2Lis[index].className = 'ative';
            }
        }

    }
    
    //封装动画函数
    function animation(ele,target){
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 25 : -25;

        ele.timer = setInterval(function(){
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed +'px';

            if(Math.abs(speed) > Math.abs(val)){
                ele.style.left = target + 'px';
            }
        },50);

    }
    var nax1 = document.getElementsByClassName('nax1')[0];
        var nax2 = document.getElementsByClassName('nax2')[0];
        var nax3 = document.getElementById('nax3');
        var nax4 = document.getElementById('nax4');
        var nax5 = document.getElementById('nax5');

        var na2 = document.getElementsByClassName('na2')[0];
        var na4 = document.getElementsByClassName('na4')[0];
        var na5 = document.getElementsByClassName('na5')[0];
        var na6 = document.getElementsByClassName('na6')[0];
        var na7 = document.getElementsByClassName('na7')[0];
        
        na2.onmouseover = function(){
            animate(nax1,{top:-70});
        }
        na2.onmouseout = function(){
            animate(nax1,{top:0});
        }

        na4.onmouseover = function(){
            animate(nax2,{top:-140});
        }
        na4.onmouseout = function(){
            animate(nax2,{top:0});
        }

        na5.onmouseover = function(){
            animate(nax3,{top:-70});
        }
        na5.onmouseout = function(){
            animate(nax3,{top:0});
        }

        na6.onmouseover = function(){
            animate(nax4,{top:-70});
        }
        na6.onmouseout = function(){
            animate(nax4,{top:0});
        }

        na7.onmouseover = function(){
            animate(nax5,{top:-70});
        }
        na7.onmouseout = function(){
            animate(nax5,{top:0});
        }


})