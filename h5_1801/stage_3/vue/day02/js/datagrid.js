// 对获取数据组件的封装
let _fn;
Vue.component('datagrid',{
    props:['api'],
    template:`
        <div><table class="table">
            <thead>
                <tr>
                    <th>title</th>
                    <th>visit</th>
                    <th>reply</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset">
                    <td>{{obj.title}}</td>
                    <td>{{obj.visit_count}}</td>
                    <td>{{obj.reply_count}}</td>
                </tr>
            </tbody>
            </table><input type="number" v-model="num"/><input type="button" @click="handle"/></div>
    `,
    data:function(){
        let obj = {
            dataset:[],
            page:1,
            num:0
        };
        // 使用闭包将数据对象返回出去
        _fn = function(){
            return obj;
        }
        return obj;
    },
    computed:{
        pagination:{
            get:function(){
                return this.page;
            },
            set:function(_v){
                this.page = _v;
            }
        }
    },
    methods:{
        handle:function(){
            this.pagination = this.num;
        }
    },
    // vue:生命周期
    mounted:function(){
        // ajax请求数据
        $.get(this.api,{page:this.page,limit:10},function(res){
            // vm.dataset = res.data;
            // _fn().dataset = res.data;
            this.dataset = res.data;
        }.bind(this));
    }
});