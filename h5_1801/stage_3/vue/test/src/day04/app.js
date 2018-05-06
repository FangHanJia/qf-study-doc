import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import app from './components/app/app.vue'
import goodslist from './components/list/goodslist.vue'
import details from './components/details/details.vue'
import user from './components/user/myaccount.vue'


const router = new VueRouter({
    routes: [
        {
            path: '/list', 
            name: 'l', 
            component: goodslist,
            children:[
                {path:'/my/:name/:pwd',name:'m',component:user}
            ]},
        {path:'/det',name:'d',component: details}        
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})