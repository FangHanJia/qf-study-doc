// 程序主入口
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,IndexRoute,hashHistory} from 'react-router'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import {Provider} from 'react-redux'
import store from './redux/store.js'

// 组件
import CNode from './component/cnode/cnode.js'
import Login from './component/login/login.js'

// 提示语
let isLogin = (state,replace,next)=>{
    if(window.localStorage.getItem('admin') == 'admin'){
        next()
    }else{
        replace({pathname:'/'})
        next()
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Login} />
            <Route path='/cnode' component={CNode} onEnter={isLogin}/>
        </Router>
    </Provider>,
    document.getElementById('app')
)