// 程序的主入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import http from 'superagent';

// 获取数据源
// http.get('https://cnodejs.org/api/v1/topics').query({page:1,limit:10})
// .end((error,res)=>{
//     console.log(res.body.data);
// })


// es6定义组件
class DataGrid extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        data:[
                {id:1,name:'fhj',age:18,gender:1},
                {id:2,name:'tom',age:18,gender:0},
                {id:3,name:'sam',age:18,gender:1}
            ]
    }
    // 定义默认属性
    // static defaultProps = {
    //     data: [
    //         {id:1,name:'fhj',age:18,gender:1},
    //         {id:2,name:'tom',age:18,gender:0},
    //         {id:3,name:'sam',age:18,gender:1},
    //     ]
    // }

    // 封一个获取数据键的函数
    getKeys(item = {}){
        return Object.keys(item);
    }

    // 组件的渲染
    render(){
        return (
            // <div className="table-responsive ">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.state.data[0]).map(item=>{
                                    return <th key={item}>{item}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(obj=>{
                                return (
                                    <tr key={obj.id}>
                                        {
                                            this.getKeys(obj).map((key,idx)=>{
                                                return <td key={idx}>{obj[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            // </div>
        )
    }
    componentDidMount(){
        http.get('https://cnodejs.org/api/v1/topics').query({page:1,limit:10})
        .end((error,res)=>{
            var dataset = []
            var arr = res.body.data;
            for(var i=0;i<arr.length;i++){
                delete arr[i].author;
                dataset.push(arr[i]);
            }
            this.setState({data:arr})
        })
    }
}


// 渲染
ReactDOM.render(<DataGrid />,document.getElementById('app'));