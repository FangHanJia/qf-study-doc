// 合并所有reducer
import {combineReducers} from 'redux'

import cp1Reducer from '../cp1/reducer.js'

// 合并
const rootReducer = combineReducers({cp1:cp1Reducer})

// 暴露
export default rootReducer;