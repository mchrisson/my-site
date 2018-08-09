import { Component, OnInit, AfterViewInit } from '@angular/core';
import ScrollSnap from 'scroll-snap';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (<any> window).ScrollReveal().reveal('.onScrollFromLeft', {
      distance: '150%',
      origin: 'left',
      delay: 100,
      container: document.querySelector('app-home')
    });

    function callback () {
      console.log('snap');
    }

    const snapConfig = {
      scrollSnapDestination: '0% 100%',
      scrollTimeout: 600,
      scrollTime: 1000
    };

    const element = document.querySelector('app-home');
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind(callback);
  }

}
