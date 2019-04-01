import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

// import { AppRouterModule } from './app-router/app-router.module';
import { HomeModule } from './home/home.module';

import { BackgroundComponent } from './components/background/background.component';
import { HeaderComponent } from './components/header/header.component';

import { AppComponent } from './app.component';
// import { ScrollRevealDirective } from './directives/scroll-reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    // ScrollRevealDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
