import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThufileComponent } from './thufile/thufile.component';
import { ThufilesComponent } from './thufiles/thufiles.component';
import { CountdownModule } from 'ngx-countdown';


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
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule, 
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
