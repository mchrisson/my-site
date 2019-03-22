import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const appHeader: any = document.querySelector('.cust-navbar');
    if ( event.target.scrollTop >= event.target.clientHeight / 2) {
      appHeader.classList.remove('navBeforeScroll');
    } else {
      appHeader.classList.add('navBeforeScroll');
    }

    requestAnimationFrame(function() {
      ( <any> document.querySelector('.rotator')).style.transform = 'rotateX(' + ( 56 + event.target.scrollTop ) + 'deg)';
    });

  }

  ngOnInit() {
  }

}
