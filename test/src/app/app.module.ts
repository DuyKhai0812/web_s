import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThufileComponent } from './thufile/thufile.component';
import { ThufilesComponent } from './thufiles/thufiles.component';

const route : Routes = 
[
  {path : 't',component:ThufileComponent},
  {path : 'ts',component:ThufilesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ThufileComponent,
    ThufilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
