import { Component, OnInit ,Input } from '@angular/core';
import {Http} from '@angular/http';
import HttpClient from '../../utils/httpclient';
@Component({
  selector: 'datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DatagridComponent implements OnInit {
    // 接收配置文件路径
    @Input() config;
    @Input() lanType;
    // 定义数据源
    configObj:Object = {};
    // 定义语言包
    dictionary:Object = {};
    lanType:string = "cn";
    constructor(private http : Http) { }
    dataset:Array<any> = [];
    columns:Array<any> = [];
    checkArr:Array<any> = [];
    // 传进http
    request = new HttpClient(this.http);
    ngOnInit() {
        // 获取配置文件
        // this.http.get(`http://localhost:4200/assets/config/${this.config}`).subscribe(res=>{
        //     this.configObj = res.json();
        //     this.columns = this.configObj['cols'].split(',');
        //     this.http.get(this.configObj['url']).subscribe(res=>{
        //       this.dataset = res.json().data;
        //     })
        // })
        
        // 获取语言包
        this.request.get('language.txt').then(res=>{
            this.dictionary = res;
        });
        // 获取配置文件
        this.request.get(this.config).then(res=>{
            this.configObj = res;
            this.columns = this.configObj['cols'].split(',');
            this.request.get(this.configObj['url']).then(resData=>{
                this.dataset = resData['data'];
            })
        })
    }
    // 封一个将对象转化为数组的函数
    getKey(item = {}){
        return Object.keys(item);
    }
    // 封一个接收id的函数
    checkId(item){
        if(item){
            if(this.configObj['mutiple']){
                if(this.checkArr.indexOf(item.id) > -1){
                    // 反选
                    this.checkArr.splice(this.checkArr.indexOf(item.id),1);
                }else{
                    this.checkArr.push(item.id);
                }
            }else{
                this.checkArr = [item.id]
            }
        }else{
            if(this.checkArr.length == this.dataset.length){
                this.checkArr = []
            }else{
                for(let obj of this.dataset){
                    if(this.checkArr.indexOf(obj.id) < 0){
                        this.checkArr.push(obj.id)
                    }
                }
            }
        }
    }
    // 封一个数据过滤的函数
    dataFilter(key,val){

        if(this.configObj['colAttributes']){
            let colItem = this.configObj['colAttributes'][key];
            if(colItem){
                if(val[colItem.datasource][colItem.value].startsWith('http')){
                    return `<img  src="${val[colItem.datasource][colItem.value]}" />`;
                }else{
                    return val[colItem.datasource][colItem.value];
                }
                // return val[colItem.datasource][colItem.value];
            }else{
                return val[key];
            }
        }else{
            return val[key];
        }
    }
    // 语言切换
    btn_switch(){console.log(this.lanType)
        if(this.lanType == "cn"){
            this.lanType = "en";
        }else{
            this.lanType = "cn";
        }
    }

}
