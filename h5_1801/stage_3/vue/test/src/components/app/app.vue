<template>
    <div id="index">
        <img src="../../assets/logo.png">
        <h1>欢迎来到我的首页-{{name}}</h1>
        <router-link to="/list">列表</router-link>
        <router-link to="/det">详情</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'index',
        data(){
            return {
                name: "fhj"
            }
        }        
    }
</script>
<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:500px;
  margin:60px auto;
}
h1{color:green;}
h2{color:red;}
</style>

