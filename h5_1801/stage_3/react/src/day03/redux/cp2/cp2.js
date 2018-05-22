// 视图层
import React from 'react'
import ReactDOM from 'react-dom'

// 导入公共store
import store from '../store.js'

export default class Cp2 extends React.Component{
    render(){
        return (
            <div>
                <h1>cp2:{store.getState().cp1}</h1>
            </div>
        )
    }
}