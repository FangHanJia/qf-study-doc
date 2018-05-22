import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 导入指令
import { HlDirective } from './hl/hl.directive';
@NgModule({
  declarations: [
    AppComponent,
    HlDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
