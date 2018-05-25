import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // 接收父组件的参数
  @Input() currItem:string;

  // 向父组件传参
  @Output() parentAttr = new EventEmitter<string>();
  childEvent(val:string){
      this.parentAttr.emit(val);
  }

}
