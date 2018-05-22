// 程序主入口
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// 公共store
import store from './redux/store.js'

// 组件
import Cp1 from './cp1/cp1.js'

ReactDOM.render(
    <Provider store={store}>
        <Cp1 />
    </Provider>,
    document.getElementById('app')
)