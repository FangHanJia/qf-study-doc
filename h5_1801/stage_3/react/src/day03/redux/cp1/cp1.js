// 视图层
import React from 'react'
import ReactDOM from 'react-dom'
// actions
import  actions from './actions.js'
// 导入公共store
import store from '../store.js'
// 导入组件cp2
import Cp2 from '../cp2/cp2.js'


// 组件
class Cp1 extends React.Component{
    state = {count:0}
    // 方法
    handle(){
        store.dispatch(actions.increment())
        this.setState({count:store.getState().cp2})
    }

    render(){
        return (
            <div>
                <h1>cp1:{this.state.count}</h1>
                <input type="button"  value="cp1" onClick={this.handle.bind(this)}/>
                <Cp2 />
            </div>
        )
    }
}

// 渲染
ReactDOM.render(
    <Cp1 />,
    document.getElementById('app')
)