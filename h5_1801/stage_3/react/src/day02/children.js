// 程序主入口
// 用于测试父子组件之间的通信
import React from 'react';
import ReactDOM from 'react-dom';

// 父组件
class Parent extends React.Component{
    state = {
        count:0
    }
    handle(){
        this.setState({count:this.state.count +1})
    }

    render(){
        return (
            <div>
                <h1>父组件：{this.state.count}</h1>
                <Children handle={this.handle.bind(this)} />
            </div>
        )
    }
}
// 子组件
class Children extends React.Component{
    state = {
        count:0
    }
    handle(){
        // 修改本身
        this.setState({count:this.state.count + 1});
        // 修改父组件
        this.props.handle()
    }
    render(){
        return (
            <div>
                <h1>子组件调用：{this.state.count}</h1>
                <input type="button" value="children" onClick={this.handle.bind(this)}/>   
            </div>
        )
    }
}

ReactDOM.render(<Parent />,document.getElementById('app'))