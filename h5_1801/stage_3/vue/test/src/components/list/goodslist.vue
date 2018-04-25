<template>
    <div>
        <h1>列表</h1>
        <router-link to="/my/fhj/1234">个人中心</router-link>
        <input type="button" value="详情页" @click="$router.push({name:'d',params:{name:'fhj',pwd:1234}})"/>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{}
</script>