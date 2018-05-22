// 登陆组件
import React from 'react'
import './login.scss'
class Login extends React.Component{
    handle(){
        // 保存用户名
        let admin = document.getElementById('username').value;
        window.localStorage.setItem('admin',admin);
        this.props.router.push('/cnode')
    }
    render(){
        return (
            <div className="login">
                <h3 className="admin">管理员登陆</h3>
                <div className="form-group">
                    <label htmlFor="username">用户名：</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="passord">密码：</label>
                    <input type="password" className="form-control" id="passord" />
                </div>
                <button type="button" className="btn btn-success" onClick={this.handle.bind(this)}>登陆</button>
            </div>
        )
    }
}
export default Login;