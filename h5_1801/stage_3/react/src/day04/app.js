// 程序主入口
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// 导入公共store
import store from './store.js'
// 主组件
import Cp1 from './cp1/cp1.js'

// 渲染
ReactDOM.render(
    <Provider store={store}>
        <Cp1 />
    </Provider>,
    document.getElementById('app')
)