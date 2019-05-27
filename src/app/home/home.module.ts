import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { HomeSecComponent } from './home-sec/home-sec.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';

import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterializeModule
  ],
  exports: [HomeRoutingModule, MaterializeModule, ScrollRevealDirective],
  declarations: [
    HomeComponent,
    HomeLandingComponent,
    HomeMainComponent,
    ScrollRevealDirective,
    HomeSecComponent,
    HomeFooterComponent,
    SectionHeaderComponent
  ]
})
export class HomeModule { }
