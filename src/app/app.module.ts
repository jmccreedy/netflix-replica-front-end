import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideosComponent} from "./videos.component";
import {HttpClientModule} from "@angular/common/http";
import {WebService} from "./web.service";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ReactiveFormsModule} from "@angular/forms";

let routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
