import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyListComponent } from './myList/myList.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MyListComponent
  ]
})
export class AppModule { }
