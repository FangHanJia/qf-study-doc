// 程序主入口
// 用于测试组件之间的通信：父子
import React from 'react';
import ReactDOM from 'react-dom';
// 父组件
class Parent extends React.Component{

    state = {
        count:0
    }

    handle(){
        this.setState({count:this.state.count + 1})
        // 调用子组件的方法
        this.refs.A.handleA();
    }

    render(){
        return (
            <div>
                <h1>父组件：{this.state.count}</h1>
                <input type="button" value='parent' onClick={this.handle.bind(this)}/>
                <ChildrenA text={this.state.count} ref='A'/>
            </div>
        )
    }
}

// 子组件：接收参数，提供方法
class ChildrenA extends React.Component{
    
    state = {
        count:0
    }
    // 定义方法
    handleA(){
        this.setState({count:this.state.count + 1})
    }
    render(){
        return (
            <div>
                <h1>子组件接收参数：{this.props.text}</h1>
                <h1>子组件提供方法：{this.state.count}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Parent />,document.getElementById('app'));