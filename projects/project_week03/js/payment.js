
document.addEventListener('DOMContentLoaded',function(){


  /*--------------------金秋--------------------------------------------------------*/

    var list=[{
        imgurl:"../images/g1.png",
        cont:"Gucci Dressage Oriqinal GG Canvas Tote Bag 296850 Coffee",
        color:"BLACK",
        size:"Defeult",
        Qty:"3",
        price:"$1，470.00"

    },{
        imgurl:"../images/g2.png",
        cont:"Gucci Dressage Oriqinal GG Canvas Tote Bag 296850 Coffee",
        color:"BLACK",
        size:"Defeult",
        Qty:"3",
        price:"$1，470.00"

    },{
        imgurl:"../images/g3.png",
        cont:"Gucci Dressage Oriqinal GG Canvas Tote Bag 296850 Coffee",
        color:"BLACK",
        size:"Defeult",
        Qty:"3",
        price:"$1，470.00"

    },{
        imgurl:"../images/g4.png",
        cont:"Gucci Dressage Oriqinal GG Canvas Tote Bag 296850 Coffee",
        color:"BLACK",
        size:"Defeult",
        Qty:"3",
        price:"$1，470.00"

    }];
var box1=document.getElementById('box1');
var tou=document.getElementById('tou');

    window.onscroll=function(){
    var scroll=window.scrollY;
        if(scroll>100){
            box1.className="bc fixed";
       

        } else{
            box1.className='bc';


            }
    }

    var html="<ul>";

    var goods=document.getElementById('goods');
    var goodw=document.getElementById('goodw');

    ul=list.map(function(item){

        return `
        <li>
        <img src="${item.imgurl}"/>
        <p>${item.cont}</p>
        <span>Color:${item.color}</span>
        <h3>Size:${item.size}</h3>
        <h3>Qty:${item.Qty}</h3>
        <h3>Price:${item.price}</h3>
        </li>`

    }).join('');
    html+="</ul>";
//把ul写入goods
    goods.innerHTML=ul;

goodw.innerHTML=list.map(function(item){

        return `
        <li>
        <img src="${item.imgurl}"/>
        <p>${item.cont}</p>
        <span>Color:${item.color}</span>
        <h3>Size:${item.size}</h3>
        <h3>Qty:${item.Qty}</h3>
        <h3>Price:${item.price}</h3>
        </li>`

    }).join('');



/*-----------------------------------婷婷-------------------------------------*/

    // test显示隐藏的代码（后期优化）
   var enid3 = document.getElementById('enid3') ;
   var enid1 = document.getElementById('enid1') ;
   var enid2 = document.getElementById('enid2') ;

   var test1 = document.getElementById('test1');
   var test2 = document.getElementById('test2');
   var test3 = document.getElementById('test3');

    enid3.style.display ='none';
    enid2.style.display ='none';
    enid1.style.display ='none';

         test1.onmouseover = function(){console.log(666);
                enid1.style.display ='block';
               
                } 
        test1.onmouseout =function(){
                    enid1.style.display ='none';
                   }
      test2.onmouseover = function(){console.log(666);
                enid2.style.display ='block';
               
                } 
        test2.onmouseout =function(){
                    enid2.style.display ='none';
                   }
        test3.onmouseover = function(){console.log(666);
                enid3.style.display ='block';
                
                } 
        test3.onmouseout =function(){
                    enid3.style.display ='none';
                   }
 
            // youhui 的浮动效果
        var newslist = document.getElementsByClassName('newslist')[0];
         var details = document.getElementsByClassName('details')[0];
         var links = newslist.getElementsByTagName('span');

         // 给所有a标签绑定事件
         for(var i=0;i<links.length;i++){
                    // 移入绑定的事件
            links[i].onmouseover =function(){
                // 页面显示title的内容
                details.innerHTML = this.title;
                //显示details
                details.style.display='block';

                // 移除前备份title内容
                this.bak  = this.title;

                // 去除title属性
                this.removeAttribute('title');
            }
                 // 移除绑定的事件
              links[i].onmouseout =function(){
                 //隐藏details
                    details.style.display='none';
                    // 移除后备份title内容
                   this.title =this.bak ;
              }
              // 移动时绑定的事件(跟随)
               links[i].onmousemove =function(e){
                    details.style.left = e.clientX -30 +'px';
                    details.style.top = e.pageY +30 +'px';

               } 
 
         }
    // 第3apply部分
        var apply = document.getElementById('apply');
         var details1 = document.getElementById('details1');
          apply.onmouseover =function(){
                // 页面显示title的内容
                details1.innerHTML = this.title;
                //显示details
                details1.style.display='block';

                // 移除前备份title内容
                this.bak  = this.title;

                // 去除title属性
                this.removeAttribute('title');
            }
                 // 移除绑定的事件
              apply.onmouseout =function(){
                 //隐藏details
                    details1.style.display='none';
                    // 移除后备份title内容
                   this.title =this.bak ;
              }
              // 移动时绑定的事件(跟随)
               apply.onmousemove =function(e){
                    details1.style.left = e.clientX -40 +'px';
                    details1.style.top = e.pageY +30 +'px';

               } 
   
})