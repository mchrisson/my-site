import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeRoutingModule, ScrollRevealDirective],
  declarations: [HomeComponent, HomeLandingComponent, HomeMainComponent, ScrollRevealDirective]
})
export class HomeModule { }
