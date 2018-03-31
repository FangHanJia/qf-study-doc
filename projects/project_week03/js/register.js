document.addEventListener('DOMContentLoaded',function(){
    var vcode = document.getElementById('vcode');
    var code = document.getElementById('code');
    var btn = document.getElementById('btn');

    // --------------左边表单------------
    function createCode(){
        var res = '';
        for(var i=0;i<4;i++){
            var num = parseInt(Math.random()*10);
                res+=num;
        }
        return res ;
    }
        var yzm = createCode();
        code.innerHTML = yzm;

    btn.onclick = function(e){
         e = e || window.event;
        // -----------正则邮箱-----------
        // 邮箱是以字母开头
        var Email = document.getElementById('Email');
        var _Email = Email.value;
        var reg = /^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/i
        if(!reg.test(_Email)){
            alert('请输入邮箱');
            return false;
        }
       // -----------正则密码-----------
       // 正则匹配除空格以外的字符，但是要限制在20个数以内
       var password = document.getElementById('password');
       var _password = password.value;
       var reg = /^\S{1,20}$/
       if(!reg.test(_password)){
            alert('请输入密码');
            return false;
       }
        // ---------验证码验证------------
        var _vcode = vcode.value;
        if(_vcode === ''){
            alert('请输入验证码')
            return false;
        }
        if(_vcode === yzm){
            alert('验证正确');
            return true;
        }else{
            alert('验证错误');
            return false;
        }
    }
    // / --------------右边表单--------------
    var btn_r = document.getElementById('btn_r');
    btn_r.onclick = function(){
        // -------正则邮箱--------
        var r_Email = document.getElementById('r_Email');
        var Email_r = r_Email.value;
        var reg = /^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/i
         if(!reg.test(Email_r)){
            alert('请输入邮箱');
            return false;
         }
        // ---------正则密码-------
        var _psd1 = document.getElementById('r_possword').value;
        var _psd2 = document.getElementById('r_possword2').value;
        var reg = /^\S{1,20}$/
        if(!reg.test(_psd1)){
            alert('请输入密码');
            return false;
        }
        if(!reg.test(_psd2)){
            alert('请再次输入密码');
            return false;
        }
        if(_psd1!=_psd2){
            alert('请输入一致的密码');
            return false;
        }
        // ---------勾选框---------
        var r_c1 = document.getElementById('r_c1').checked;
        var r_c2 = document.getElementById('r_c2').checked;
        if(r_c1===false || r_c2===false){
            alert('请勾选勾选框');
            return false;
        }else{
            alert('恭喜通过验证');
            return true;
        }
    }
});



