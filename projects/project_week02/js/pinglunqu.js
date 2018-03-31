document.addEventListener('DOMContentLoaded',function(){
    
        
    
 //星星评分   
        let star = document.querySelector('#star');
        let lis = star.querySelectorAll('li');
        let info =document.querySelector('info');


     // 记录当前索引值
            let index = 0;

            // 分数
            let score = 0;

            // 评分说明
            let arr = '差评,一般,良好,推荐,强力推荐'.split(',');


            // 事件委托
            star.onmouseover = e=>{
                //如果事件的类名是li
                if(e.target.nodeName.toLowerCase() === 'li'){

                    // 获取当前索引值
                    lis.forEach((li,idx)=>{
                        if(e.target === li){
                            index = idx;
                        }
                    });

                    // 高亮与去除高亮
                    lis.forEach((li,idx)=>{
                        if(idx<=index){
                            li.className = 'active';
                        }else{
                            li.className = '';
                        }
                    });
                }
            }


            // 点击评分
            star.onmouseup = e=>{
                // 获取当前索引值
                if(e.target.tagName.toLowerCase() === 'li'){
                    lis.forEach((li,idx)=>{
                        if(li === e.target){
                            score = idx;
                         
                        }
                    })
                }
            }


            // 鼠标移出
            star.onmouseleave = ()=>{
                lis.forEach((li,idx)=>{
                    // 小于评分的li高亮
                    if(idx <= score){
                        li.className = 'active';
                    }

                    // 大于评分的li去除高亮
                    else{
                        li.className = '';
                    }
                })
            }
    
 // 验证码
    
        // 1)获取元素
        var vcode = document.getElementById('Vcode');
        var scode = document.getElementById('Scode');
        var ssttrr = 'abcdefghijklmnopqrstuvwxyz0123456789';//str[35]

        randomCode();
        // 封装函数
        function randomCode(){
            // 随机生成一个4位验证码（包含字母）
            var _code = '';
            for(var i=0;i<4;i++){
                var index = parseInt(Math.random()*ssttrr.length) //不可能大于36
                _code += ssttrr[index]
            }
            Vcode.innerHTML = _code.toLowerCase();
            }

 //过滤不文明字符；
 
    
        
    var str ='操你妈,去你大爷,靠,老子,垃圾货,操,他妈的,fuck,法轮功,金三胖,shit,bitch'.split(',');

    var res= [];

    var msglist = document.getElementById('msglist');
    var content =document.getElementById('content');
    var btnSub = document.getElementById('btnSub');
   

    btnSub.onclick = function(){

        var _content = content.value;

        str.forEach(function(item){

            var reg = new RegExp(item,'ig');

          _content=_content.replace(item,'**')

            })

            res.push(_content);

            msglist.innerHTML = render();

            randomCode();
            content.value ='';
            content.focus();
 console.log(msglist);
       

    }
            var id =0;
        function render(){
            return res.map(function(txt){
                return '<li>'+ txt+'</li>';
             console.log();   
            }).join('');
        }
    

 
        

       
             showLun();//轮播图
             function showLun(){
                var tupian_list = document.getElementById('tupian_list');
               
               var timer;
                function animate(offset){

                    var newLeft = tupian_list.offsetLeft;console.log(tupian_list.offsetLeft)
                        tupian_list.style.left = newLeft + offset +'px';
                    if(newLeft<-672){console.log(666)
                          tupian_list.style.left = 0 + 'px';
                     }else if(newLeft>0){
                          tupian_list.style.left = -672 + 'px';
                     } 
                }
               
              
              function play() {
                  timer = setInterval(function(){
                      animate(168)
                  }, 1000)
              }
            play();

       }


             showList();//右边生成列表
             function showList(){
                var goodslist =[ {   no:"1",
                img:"../images/libiao1.fw.png",
                content:"Decent Module Case,Silicone Skin Cover for iphone",
                listprice:"USD 219",
                ourprice:"USD 189",
                save:"save USD 30",
            },
            {   
                no:"2",
                img:"../images/libiao2.fw.png",
                content:"Decent Module Case,Silicone Skin Cover for iphone",
                listprice:"USD 219",
                ourprice:"USD 289",
                save:"save USD 30",
            },
            {   
                no:"3",
                img:"../images/libiao3.fw.png",
                content:"Decent Module Case,Silicone Skin Cover for iphone",
                listprice:"USD 219",
                ourprice:"USD 180",
                save:"save USD 30",
            },
           {    
                no:"4",
                img:"../images/libiao4.fw.png",
                content:"Decent Module Case,Silicone Skin Cover for iphone",
                listprice:"USD 219",
                ourprice:"USD 98",
                save:"save USD 30",
            }]

            var datalist = document.getElementById('datalist');

        //初始化生成列表
        var html = "<ul>";

        for(var i=0;i<goodslist.length;i++){
        var goods = goodslist[i];
        html +='<li><div><img src="'+goods.img+'"></div><p>'+goods.content+'</p><p class="price"><span>'+goods.listprice+'</span>'+goods.ourprice+'</p><p class="save">'+goods.save+'</p></li>';
        }

        
        html += '</ul>';

        datalist.innerHTML = html;
             }

            //右边下拉显示隐藏
            showxiala();
            function showxiala(show){
                var xiala = document.getElementById('xiala');
                var data =document.getElementById('datalist');
            
                data.style.display = show;
            
            //鼠标移上去的点击事件
            xiala.onclick = function(){
                if( data.style.display === 'none'){
                    showxiala('block');
                }else{
                    showxiala('none');
                }
            }
            }
        
             
        
})

 
