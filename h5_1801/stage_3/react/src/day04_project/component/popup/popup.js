// 弹出框
import './popup.scss'

// 模块
import React from 'react'

// 组件
import Datagrid from '../datagrid/datagrid.js'

class Popup extends React.Component{
    // 动态配置
    static defaultProps = {
        config:{
            url:'https://cnodejs.org/api/v1/topics',
            data:{page:3,limit:5},
            method:'get',
            cols: 'title,visit_count,reply_count,last_reply_at',
            key: 'id',
            name:'popup'
        }
    }


    render(){
        return (
            <div className="popup" >
                <Datagrid config={this.props.config} />
                
            </div>

        )
    }
}
export default Popup;