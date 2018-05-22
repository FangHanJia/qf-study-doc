// 程序主入口
// 组件的生命周期

import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component{
    state = {count:0}
    handle(){
        this.setState({count:this.state.count + 1})
    }
    // state改变触发该方法
    shouldComponentUpdate(props,state){
        console.log(props,state)
        // 重新渲染组件
        return true;
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type="button" value="lifeCycle" onClick={this.handle.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<LifeCycle />,document.getElementById('app'));