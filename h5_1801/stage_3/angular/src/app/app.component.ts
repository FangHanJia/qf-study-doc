import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fhj';
  bg_green='bg_green';
  // 封一个显示数据的函数
  btn_show(e){
    this.data = [
      {name:'李白',age:22},
      {name:'韩信',age:22},
      {name:'赵云',age:22}
    ]
  }
  // 数据源
  data:Array<any> = [];
  // 封一个将对象组合成数组的函数
  getKeys(item){
      return Object.keys(item);
  }
  // 封一个key函数
  key(index,obj){
      return obj.age;
  }
  // 封一个改变num值的函数
  num = 0;
  changeEle():void{
      if(this.num > 3){
          this.num = 0;
      }
      this.num ++ ;
  }

  // 父组件向子组件传参:泛型
  
  // dataset = [
  //   { id: 11, name: 'Mr. Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ];
  dataset:Array<any> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  currItem = null;
  getItem(item){
    return this.currItem = item;
  }

  // 接收子组件的参数
  parentEvent(val:string){
    console.log(val)
  }
  // 动态配置config
  // config:object = {
  //   url:'https://cnodejs.org/api/v1/topics?page=1&limit=5',
  //   cols:'title,reply_count,visit_count,create_at,loginname,avatar_url',
  //   colAttributes:{
  //     loginname:{
  //       datasource:'author',
  //       value:'loginname'
  //     },
  //     avatar_url:{
  //       datasource:'author',
  //       value:'avatar_url'
  //     }
  //   },
  //   mutiple:true
  // }
  lanType:string = 'en';
}
