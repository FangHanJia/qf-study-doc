// 程序主入口
// 用于测试兄弟组件的通信
import React from 'react';
import ReactDOM from 'react-dom';

// 父组件
class Parent extends React.Component{
    // 用于操作其子组件
    handle(){
        this.refs.B.change();
    }
    render(){
        return (
            <div>
                <ChildrenA change={this.handle.bind(this)} />
                <ChildrenB ref="B" />

            </div>
        )
    }
}
// 兄弟A
class ChildrenA extends React.Component{
    state = {count:0}

    // 接收父组件的方法：用于操作兄弟组件
    handle(){
        // 修改本身
        this.setState({count:this.state.count +1});
        // 修改兄弟B
        this.props.change();
    }
    render(){
        return (
            <div>
                <h1>兄弟A:{this.state.count}</h1>
                <input type="button" value="A" onClick={this.handle.bind(this)} />
            </div>
        )
    }
}

// 兄弟B
class ChildrenB extends React.Component{
    state = {count:0}
    change(){
        this.setState({count:this.state.count + 1})
    }

    render(){
        return (
            <div>
                <h1>兄弟B：{this.state.count}</h1>
            </div>
        )
    }
}

// 渲染
ReactDOM.render(<Parent />,document.getElementById('app'))