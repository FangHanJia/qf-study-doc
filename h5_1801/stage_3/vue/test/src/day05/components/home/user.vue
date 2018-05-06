<template>
    <div>
        <h1>用户中心</h1>
        <datagrid :config="config"/>
    </div>
</template>
<script>
    // 引入组件视图
    import datagrid from '../datagrid/datagrid.vue';
    export default{
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    url:'user',
                    cols:['username','password']
                }
            }
        }
    }
</script>