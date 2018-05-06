<template>
    <div class="login ">
        <!-- 遮罩窗 -->
        <div class="mask" v-show="show" @click="masked">
            <img src="../../staic/img/loading.gif" class="loading"/>
        </div>
        <img src="../../../day04/assets/logo.png" />
        <h1>欢迎登陆后台管理界面</h1>
        <div class="form-group  myform">
            <label for="username">用户名：</label>
            <input type="text" class="form-control" id="username" placeholder="请输入您的用户名" v-model="data.username">
        </div>
        <div class="form-group myform">
            <label for="password">密码：</label>
            <input type="password" class="form-control" id="password" placeholder="请输入您的密码" v-model="data.password">
        </div>
        <div class=" myform" >
            <button type="button" class="btn btn-success" @click="login">登陆</button>
        </div>
    </div>
</template>

<script>
    import http from '../../utils/httpclient.js';
    import '../../staic/login.css';
    import '../../staic/bootstrap.css';
    export default {
        data(){
            return {
                data: {
                    username: '',
                    password: ''
                },
                show:false
            }
        },
        methods: {
            login(){
                // 显示遮罩窗
                this.show = true;
                http.post('login', this.data).then((res) => {
                    if(res.status){
                        window.localStorage.setItem('token',res.data); 
                        this.$router.push({name:'home'});    
                        this.show = false;
                    }else{
                        this.data.username = '';
                        this.data.password = '';
                        alert('密码错误');
                        this.show =false;
                    }
                }) 
            },
            // 遮罩窗控制
            masked(){
                this.show = this.show == 'false' ? true : false;
            }
        }
    }
</script>