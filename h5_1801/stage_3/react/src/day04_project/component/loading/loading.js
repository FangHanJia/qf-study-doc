// 遮罩窗组件
import React from 'react'
import './loading.scss'
class Loading extends React.Component{
    render(){
        let html =(
            <div>
                <div className="mask"></div>
                <div className="bounceBox">
                    <div className="bounce bounce1"></div>
                    <div className="bounce bounce2"></div>
                    <div className="bounce bounce3"></div>
                </div>
            </div>
        )
        return this.props.show ? html : null;
    }
}
export default Loading;