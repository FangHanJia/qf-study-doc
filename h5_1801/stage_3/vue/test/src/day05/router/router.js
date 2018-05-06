import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入子组件
import login from '../components/login/login.vue';
import home from '../components/home/home.vue';
import user from '../components/home/user.vue';
import transaction from '../components/home/transaction.vue';

const router = new VueRouter({
    routes: [
        {path: '/', component: login,name:'login'},
        {
            path: '/home', component: home,name:'home',
            children:[
                {path:'/home/user',component:user,name:'user'},
                {path:'/home/transaction',component:transaction,name:'ts'}
            ]
        }
    ]
})

// 暴露模块
export default router;