import Vue from 'vue';
import router from './router/router.js'
// 全局使用boostrap
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// 主入口组件
import appComponent from './components/app/app.vue'

new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})