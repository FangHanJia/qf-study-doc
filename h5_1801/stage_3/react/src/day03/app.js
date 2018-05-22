// 程序主入口
// 路由的切换
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory,Link} from 'react-router';
const links = (
    <ul>
        <li><Link to='/'>index</Link></li>
        <li><Link to='/list/fhj'>list</Link></li>
    </ul>
)

// 首页组件
class Index extends React.Component{
    render(){
        return (
            <div>
                <h1>首页</h1>
                {links}
            </div>
        )
    }
}
// 列表组件
class List extends React.Component{
    render(){
        return (
            <div>
                <h1>列表{this.props.params.name}</h1>
                {links}
            </div>
        )
    }
}

// 渲染
// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path='/' component={Index} />
//         <Route path='/list/:name' component={List} />
//     </Router>,
//     document.getElementById('app')
// );

// 导入模块组件
import routes from './indexRoute'

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
)