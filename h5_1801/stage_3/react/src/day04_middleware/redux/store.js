// 公共store
// 中间件:属于redux
import {createStore,applyMiddleware} from 'redux'


// 合并后的reducer
import rootReducer from './rootReducer.js'
import middleware from './middleware.js'

// 创建公共store
const store = createStore(rootReducer,applyMiddleware(middleware));

// 暴露
export default store;