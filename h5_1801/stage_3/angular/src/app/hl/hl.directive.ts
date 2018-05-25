import {Directive, ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
    selector: '[hl]',
    // 事件方式二：
    host:{
        '(click)':'onClick($event)'
    }
})

export class HlDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    // 事件方式一：
    // @HostListener('click',['$event']) onclick(event){
    //     console.log(event)
    // }

    // 添加自定义属性
    @HostBinding('attr.fhj') fhj = 'admin';
    // 获取自定义属性
    @Input() f : string ;
    // 封一个点击事件
    onClick(event){
        console.log(event.target,this.fhj);
    }

}