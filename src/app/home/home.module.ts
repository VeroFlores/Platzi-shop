import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BannerComponent} from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations:[
    BannerComponent,
    HomeComponent
  ],
  imports :[
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule{

}
