// 公共store
import {createStore,combineReducers} from 'redux'

// cp1:reducer
import cp1Reducers from './cp1/reducer.js'

// cp2:reducer
import cp2Reducers from './cp2/reducer.js'

// 将所有的reducer合并起来,用于创建一个公共store
const rootReducers = combineReducers({
    cp1:cp1Reducers,cp2:cp2Reducers
})

// 创建store实例
const store = createStore(rootReducers);

// 暴露
export default store;