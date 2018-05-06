<template>
    <ul>
        <li v-for="obj in menus">
            <router-link :to='obj.path'>{{obj.text}}</router-link>
        </li>
        
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus:[
                    {path:'/home/user',text:'用户管理'},
                    {path:'/home/transaction',text:'交易管理'},
                    {path:'/home/transaction',text:'交易管理'}
                ]
            }
        }
    }
</script>