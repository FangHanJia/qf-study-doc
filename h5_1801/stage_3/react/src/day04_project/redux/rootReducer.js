// 根reducer
import {combineReducers} from 'redux'
import datagrid from '../component/datagrid/reducer.js'

const rootReducer = combineReducers({
    datagrid
})

export default rootReducer;