// 程序主入口
import React from 'react';
import ReactDOM from 'react-dom';

// 定义组件:改变this指向
class Handle extends React.Component{
    // 定义state
    state = {
        count:0,
        text:''
    }

    // 1、定义时使用箭头函数
    // handle = (e)=>{
    //     console.log(e.target)
    // }

    // 2、构造函数使用bind
    handle(n,e){
        console.log(n,e.target);
        this.setState({
            count:this.state.count+n,
            text:e.target.value
        });
    }
    constructor(){
        super()
        this.handle = this.handle.bind(this)
    }




    // 渲染
    render(){
        // 动态修改state
        // return <input type='button' value={this.state.count} onClick={this.handle.bind(this,100)}/>
        
        // 3、调用函数时使用箭头函数
        // return <input type='button' value='handle' onClick={(e)=>this.handle(e)} />

        // 4、调用函数时使用bind:传参数--事件对象默认为最后一个参数
        // return <input type='button' value='handle' onClick={this.handle.bind(this,100)} />

        // 动态修改表单元素的值
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input type='text' value={this.state.text}  onChange={this.handle.bind(this,100)} />
            </div>
        )
    }
}

// 构建
ReactDOM.render(<Handle />,document.getElementById('app'));