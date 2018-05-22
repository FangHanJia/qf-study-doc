// 视图层
import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions.js'

// 遮罩窗
import Loading from '../loading/loading.js'
let cols = null;
class Datagrid extends React.Component{

    componentWillMount(){
        cols = this.props.config.cols.split(',')
    }

    getKeys(item ={}){
        return Object.keys(item)
    }

    componentDidMount(){
        this.props.refresh(this.props.config);
    }
    render(){
        let ds = this.props.data || {}
        ds = ds[this.props.config.name] ? ds[this.props.config.name].data || [] : []
        console.log(ds);
        return (
            <div>
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                        <tr>
                            {
                                this.getKeys(ds[0]).map(key=>{
                                    return cols.indexOf(key) > -1 ? <th key={key}>{key}</th> : null;
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ds.map(item=>{
                                return (<tr key={item[this.props.config.key]}>
                                    {
                                        this.getKeys(item).map(key=>{
                                            return cols.indexOf(key) > -1 ? <td key={key}>{item[key]}</td> : null;
                                        })
                                    }
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <Loading show={this.props.show}/>
            </div>
        )
    }
}
// 将state映射到视图
const mapStateToProps = (store)=>{
    return {
        data:store.datagrid,
        show:store.datagrid.loading || false
    }
}

// 连接
const container = connect(mapStateToProps,Actions)(Datagrid);
export default container;