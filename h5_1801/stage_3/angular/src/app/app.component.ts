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
}
