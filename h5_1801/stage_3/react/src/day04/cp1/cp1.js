// 视图层
import React from 'react'
import {connect} from 'react-redux'
import Actions from './actions.js'

// 组件cp2
import Cp2 from '../cp2/cp2.js'

// 定义组件
class Cp1 extends React.Component{
    handle(){
        console.log(this.props);
        this.props.increment();
    }
    render(){
        return (
            <div>
                <h1>cp1-{this.props.cp1}</h1>
                <input type="button" value="cp1" onClick={this.handle.bind(this)} />
                <Cp2 />
            </div>
        )
    }
}

// 将state映射到props上
const mapStateToProps = (store)=>{
    return {
        cp1:store.cp1
    }
}

// 暴露容器组件
export default connect(mapStateToProps,Actions)(Cp1);