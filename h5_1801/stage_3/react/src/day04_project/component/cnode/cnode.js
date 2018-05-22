// 调用datagrid组件的组件
import './cnode.scss'

import React from 'react'

import Datagrid from '../datagrid/datagrid.js'
import Popup from '../popup/popup.js'
class CNode extends React.Component{
    // 离开提示
    componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.leave
        )
    }
    leave(){
        return '确定要离开？'
    }
    // 动态配置
    static defaultProps = {
        config:{
            url:'https://cnodejs.org/api/v1/topics',
            data:{page:1,limit:10},
            method:'get',
            cols: 'title,visit_count,reply_count,last_reply_at',
            key: 'id',
            name:'cnode'
        }
    }
    state = {
        show:{display:'none'}
    }

    // 显示弹出框
    showPopup(){
        this.setState({show:{display:'block'}})
    }

    render(){
        return (
            <div className="cnode">
                <div className="form-group searchBox">
                    <label htmlFor="search">Email address</label>
                    <input type="email" className="form-control textBox" id="search" />
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.showPopup.bind(this)}>查看</button>
                </div>
                <Datagrid config={this.props.config} />
                <div style={this.state.show}>
                    <Popup />
                </div>
            </div>
        )
    }
}
export default CNode;