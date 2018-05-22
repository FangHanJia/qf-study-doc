// 公共store
import {createStore,combineReducers} from 'redux'
import cp1 from './cp1/reducer.js'
import cp2 from './cp2/reducer.js'

const rootReducer = combineReducers({
    cp1,cp2
}) 

// 创建公共store
const store = createStore(rootReducer)
export default store;