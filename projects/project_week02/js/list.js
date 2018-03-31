

        window.onload = function(){
            var data = [
                {   no:"1",
                    img:"../images/1.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:189,
                    save:"Save USD 30",
                    timer:"2018-01-02",

                },
                {   
                    no:"2",
                    img:"../images/2.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:289,
                    save:"Save USD 30",
                    timer:"2018-01-06",
                },
                {   
                    no:"3",
                    img:"../images/3.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:180,
                    save:"Save USD 30",
                    timer:"2018-01-20",
                },
               {    
                    no:"4",
                    img:"../images/4.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:98,
                    save:"Save USD 30",
                    timer:"2018-01-26",
                },
                {   
                    no:"5",
                    img:"../images/5.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:18,
                    save:"Save USD 30",
                    timer:"2018-02-12",
                },
                {   
                    no:"6",
                    img:"../images/6.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:19,
                    save:"Save USD 30",
                    timer:"2018-01-27",
                },
                {   
                    no:"7",
                    img:"../images/7.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:89,
                    save:"Save USD 30",
                    timer:"2018-02-22",
                },
                {   
                    no:"8",
                    img:"../images/8.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice: 211,
                    save:"Save USD 30",
                    timer:"2018-03-02",
                },
                {   
                    no:"9",
                    img:"../images/9.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:300,
                    save:"Save USD 30",
                    timer:"2018-03-23",
                },
                {   
                    no:"10",
                    img:"../images/10.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:489,
                    save:"Save USD 30",
                    timer:"2018-03-24",
                },
                {   
                    no:"10",
                    img:"../images/10.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:489,
                    save:"Save USD 30",
                    timer:"2018-02-29",
                },
                {   
                    no:"12",
                    img:"../images/2.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1889,
                    save:"Save USD 30",
                    timer:"2018-02-17",
                },
                {   
                    no:"13",
                    img:"../images/5.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1890,
                    save:"Save USD 30",
                    timer:"2018-01-19",
                },
                {   
                    no:"14",
                    img:"../images/4.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1808,
                    save:"Save USD 30",
                    timer:"2018-02-21",
                },
                {   
                    no:"15",
                    img:"../images/15.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:9, 
                    save:"Save USD 30",
                    timer:"2018-01-25",
                },
                {   
                    no:"16",
                    img:"../images/16.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1,
                    save:"Save USD 30",
                    timer:"2018-04-02",
                },{   
                    no:"17",
                    img:"../images/5.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1,
                    save:"Save USD 30",
                    timer:"2018-04-17",
                },{   
                    no:"18",
                    img:"../images/8.png",
                    content:"Decent Module Case,Silicone Skin Cover for iphone",
                    listprice:"USD 219",
                    ourprice:1,
                    save:"Save USD 30",
                    timer:"2018-03-02",
                },]

            var html='<ul>';
            var list_box = document.getElementById('list_box'); 
            var pi=document.getElementById('pi');
            var de=document.getElementById('de');
                goodes();

                

            //价格排序
            var change=1;
            pi.onclick=function(){
                if(change==1){
                    data.sort(function(a,b){
                    return a.ourprice-b.ourprice;
                    });
              
                goodes();
                 change=2;
             //li[span].style.background = "url(../img/a2.png)";
                }else if(change==2){
                    data.sort(function(a,b){
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
                        for(var i=0;i<data.length;i++){
                            for(var j=i+1;j<data.length;j++){
                                if(Date.parse(data[i].timer)<Date.parse(data[j].timer)){
                                    var res=data[i];
                                    data[i]=data[j];
                                    data[j]=res;
                                }
                            }
                        };
                        goodes();  
                        dat = 2;
                }else if(dat ==2){
                    for(var i=0;i<data.length;i++){
                        for(var j=i+1;j<data.length;j++){
                            if(Date.parse(data[i].timer)>Date.parse(data[j].timer)){
                                var res=data[i];
                                data[i]=data[j];
                                data[j]=res;
                            }
                        }
                    };
                    goodes();  
                    dat = 1;
                }
                                       
            }  
            
            
            

             


            //goodes();
            function goodes(){
                  html='';          
      
                for(var i=0;i<data.length;i++){
                     var goods = data[i];
                 html+= '<li data-id="'+goods.no+'"><div><img src="'+goods.img+'"></div><p class="cn"><input type="checkbox">'+goods.content+'</p><p class="price"><del>'+goods.listprice+'</del>'+'<span>USD'+ ''+goods.ourprice+'</span></p><p class="save">'+goods.save+'</p><p>'+goods.timer+'</p></li>'

                }
                  html+='</ul>';
                    list_box.innerHTML=html;
  
            }

        //手风琴效果
         var tabx1 = document.getElementById('tabx1');console.log(tabx1);
         var tabx2 = document.getElementById('tabx2');
         var tabx3 = document.getElementById('tabx3');
         var bsn1 = document.getElementById('bsn1');console.log(bsn1);
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
            console.log(params);
            var lis = document.getElementById('list_box').getElementsByTagName('li');
            console.log(lis);
            for(var i = 0;i<lis.length;i++){
                lis[i].id = i;
                console.log(lis[i].id);
                lis[i].onclick = function(){
                   for(var key in data[this.id]){
                    console.log(key,data[this.id][key]);
                    params += key + '='+encodeURI(data[this.id][key])+'&';
                   } 
                   params=params.slice(0,-1);
                    console.log(params);
                    // location.href = '01_商品详情页面.html?'+params;
                    location.href = 'details.html?'+params;
                }
            }
         
   
}

      