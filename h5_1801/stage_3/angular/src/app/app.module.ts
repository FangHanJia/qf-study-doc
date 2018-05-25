import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// 导入指令
import { HlDirective } from './hl/hl.directive';
import { Cp1Component } from './components/cp1/cp1.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    HlDirective,
    Cp1Component,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
