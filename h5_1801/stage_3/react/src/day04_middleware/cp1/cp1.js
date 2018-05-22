// 视图层
import React from 'react'
import {connect} from 'react-redux'

import Actions from './actions.js'

class Cp1 extends React.Component{
    add(){
        this.props.increment();
    }
    minus(){
        this.props.decrement();
    }
    getData(){
        this.props.getData();
    }

    // 默认state
    state = {
        title:['id','content','create_at']
    }
    render(){
        return (
            <div>
                <h1>cp1:{this.props.count}</h1>
                <input type="button" value="+" onClick={this.add.bind(this)} />
                <input type="button" value="-" onClick={this.minus.bind(this)} />
                <input type="button" value="cp1" onClick={this.getData.bind(this)} />
                
            </div>
        )
    }
}

// 将state映射到视图
const mapStateToProps = (store)=>{
    console.log(store);
    return {
        count:store.cp1.count,
        data:store.cp1.data || []
    }
}

// 连接
const container = connect(mapStateToProps,Actions)(Cp1);

// 暴露容器组件
export default container;