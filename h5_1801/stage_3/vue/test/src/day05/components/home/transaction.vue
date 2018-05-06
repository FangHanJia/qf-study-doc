<template>
    <div>
        <h1>交易管理</h1>
        <datagrid :config="config"/>
    </div>
</template>
<script>
    // 移入表格组件
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