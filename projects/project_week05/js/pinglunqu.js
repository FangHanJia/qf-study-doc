document.addEventListener('DOMContentLoaded',function(){
    
       
        var msglist = document.querySelector('.msglist');
        var page = document.querySelector('.msglist-b');

        let qty = 5;

        let status = [200,304]
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(status.includes(xhr.status)){
                let res = JSON.parse(xhr.responseText);console.log(res)

                let ul = document.createElement('ul');
                ul.innerHTML = res.data.map(item=>{
                    return `<li>
                    <div id="mfl">
                        <img src="${item.imgurl}"  />
                            <p class="ziti">${item.date}</p>
                            <p class="ziti">${item.name}</pn>
                            <p><img src="${item.imgurl2}"  /></p>
                        </div>

                        <div id="mfr">
                            <p class="mfr ziti">${item.content}</p>
                           <p><img src="${item.imgurl3}"  /></p>
                           <img src="${item.imgurl4}"  />
                            <span class="ziti bei">${item.thankscnt}</span>
                        </div>
                        
                    </li>`
                }).join('');

                msglist.innerHTML = '';
                msglist.appendChild(ul);


                // 创建分页
                let pageLen = Math.ceil(res.total/res.qty);

                page.innerHTML = '';
                for(let i=0;i<pageLen;i++){
                    let span = document.createElement('span');
                    span.innerText = i+1;

                    // 高亮分页
                    if(i === res.page-1){
                        span.className = 'active';
                    }

                    page.appendChild(span);
                }
            }
        }
        xhr.open('get','../api/pinglun.php?qty='+qty,true);
        xhr.send();


        // 点击分页切换
        page.onclick = function(e){
            if(e.target.tagName.toLowerCase() === 'span'){
                let pageNo = e.target.innerText;

                xhr.open('get','../api/pinglun.php?qty='+qty+'&page='+pageNo,true);
                xhr.send();
            }
        }


        // 新的评论内容
       
    var l_star = document.querySelector('.l_star');
    var l_code = document.querySelector('.l_code');
    var l_vcode = document.querySelector('.l_vcode');
    var yz_em = document.querySelector('.yz_em');
    var msg = document.querySelector('.msg');
    var name_em = document.querySelector('.name_em');
    var username = document.querySelector('.username');
    var star_em = document.querySelector('.star_em');
    var l_btn = document.querySelector('#l_btn');
    var text_em = document.querySelector('.text_em');
    var yz_em = document.querySelector('.yz_em');
    var msglist = document.querySelector('.msglist');
    var dianzan = document.getElementsByClassName('dianzan');
    var dianzan2 = document.getElementsByClassName('dianzan2');
    var figure = document.getElementsByClassName('figure');
    var figure2 = document.getElementsByClassName('figure2');
    // console.log(figure);
    // -----------生成随机验证码---------
     var ssttrr = 'abcdefghijklmnopqrstuvwxyz0123456789';
       randomCode();
        // 封装函数
        function randomCode(){
            // 随机生成一个4位验证码（包含字母）
            var _code = '';
            for(var i=0;i<4;i++){
                var index = parseInt(Math.random()*ssttrr.length) //不可能大于36
                _code += ssttrr[index]
            }
             l_code.innerHTML = _code.toLowerCase();
            }
   
    l_code.onclick = function(){
        randomCode();
    }

     var danger = ['fuck','草','垃圾','TMD','操','shit','艹','狗屎','CMMB','滚蛋'];
    // --------点击星星--------
    var num = -1;
    var lis = l_star.children;
    
    l_star.onclick = function(e){
        star_em.style.display = 'none';
        e = e || window.event;
        target = e.target || e.srcElement;

        if(target.tagName.toLowerCase()==='li'){
             num = target.getAttribute('data-sid').slice(1);
        }

        for(var i = 0;i<lis.length;i++){
            if(i<=num){
                lis[i].style.backgroundPosition = '0 -30px';
            }else{
                lis[i].style.backgroundPosition = '0 0 ';
            }
        }
    }
    // ----------失去焦点时隐藏---------
    username.onblur = function(){
        name_em.style.display = 'none';
    }
    msg.onblur = function(){
        text_em.style.display = 'none';
    }

    l_vcode.onblur = function(){
        yz_em.style.display = 'none';
    }


    l_btn.onclick = function(){console.log(6666)
        var _username = username.value;
        var _msg = msg.value;
        var yzm = l_vcode.value;
        if(num === -1){
            star_em.style.display = 'inline-block';
            return false;
        }
        else if(_username.trim() === ''){
            name_em.style.display = 'inline-block';
            return false;
        }else if(_msg.trim()==='' || _msg.length <=10){
            text_em.style.display = 'inline-block';
            return false;
        }else if(yzm!=l_code.innerHTML){
            yz_em.style.display = 'inline-block';
        }else{

             danger.forEach(function(item){
                var reg = new RegExp(item,'gi');
                _msg = _msg.replace(reg,'**');
            })
                
                
                list(_username,_msg,num);

                

        }

        //还原每颗星至未选中状态
        
        for(var i = 0;i < lis.length;i++){
            lis[i].style.backgroundPosition = '0 0';
        }
            _username.value = '';

            yzm.value = '';
    }
        var id = 0;

        function list (name,pinglun,idx){
            var date = new Date().toLocaleDateString();
            msglist.innerHTML +=`<li>
            <div class="mmfl">
                <img src="../images/fivestars.fw.png">
                <p> ${name}</p>
                
            </div>
            <div class="mmfr">
                <p> ${pinglun}</p>
                <img src="../images/pingluntu.png">

            </div>

            </li>`
           
        }   
    
             
})
 
