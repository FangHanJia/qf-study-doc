// 视图层
import React from 'react'
import {connect} from 'react-redux'

// actions
import Actions from './actions.js'

// 组件
class Cp2 extends React.Component{
    render(){
        return (
            <div>
                <h3>cp2-{this.props.cp2}</h3>
            </div>
        )
    }
}

// 将state映射到props
const mapStateToProps = (store)=>{
    return {
        cp1:store.cp1,
        cp2:store.cp2
    }
}

// 暴露容器组件
export default connect(mapStateToProps,Actions)(Cp2)