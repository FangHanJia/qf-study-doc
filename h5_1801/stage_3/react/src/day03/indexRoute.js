// 用于测试indexRoute组件的模块
import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Link,IndexRoute} from 'react-router'

const links = (
    <ul>
        
        <li>
            <Link to='/login'>登陆</Link>
        </li>
        <li>
            <Link to='/index'>首页</Link>
        </li>
    </ul>
)

// 主组件
class AppComponent extends React.Component{
    
    render(){
        return (
            <div>
                {links}
                {this.props.children}
            </div>
        )
    }
}
// 进入函数
let isEnter = ()=>{
    alert('欢迎来到！')
}

// 登陆路由
class LoginComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>登陆</h1>
            </div>
        )
    }
}
// 首页路由
class IndexComponent extends React.Component{
    // 离开提示
    componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }
    routerWillLeave(){
        return '确认要离开？'
    }
    render(){
        return (
            <div>
                <h1>首页</h1>
            </div>
        )
    }
}

// 嵌套路由
const routes = (
    <Route path='/' component={AppComponent} onEnter={isEnter}> 
        <Route path='/login' component={LoginComponent}></Route>
        <Route path='/index' component={IndexComponent}></Route>
    </Route>
)
export default routes;