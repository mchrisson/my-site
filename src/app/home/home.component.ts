import { Component, HostListener, OnInit, OnDestroy, AfterContentInit, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import lax from 'lax.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  constructor(private elRef: ElementRef) { }
  angle = 0;
  scrollTop = 0;

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const appHeader: any = document.querySelector('.cust-navbar');
    if ( event.target.scrollTop >= event.target.clientHeight / 2) {
      appHeader.classList.remove('navBeforeScroll');
    } else {
      appHeader.classList.add('navBeforeScroll');
    }
    this.scrollTop = event.target.scrollTop;
    this.draw();
  }

  @HostListener('mousemove', ['$event'])
  onmousemove(event) {
    const screenWidthHalf = window.innerWidth / 2;
    const mouseX = event.clientX;
    const diff = mouseX - screenWidthHalf;
    this.angle = ( diff / screenWidthHalf ) * 20;
    this.draw();
  }

  draw() {
    requestAnimationFrame(() => {
      ( <any> document.querySelector('.rotator')).style.transform = 'rotateY(' + ( this.angle ) + 'deg)';
      ( <any> document.querySelector('.rotator')).style.transform += ' rotateX(' + ( 56 + this.scrollTop / 4 ) + 'deg)';
      // lax.update(event.target.scrollTop);
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    /* lax.setup();
    const updateLax = () => {
      lax.update(this.elRef.nativeElement.scrollTop);
      window.requestAnimationFrame(updateLax);
    };
    window.requestAnimationFrame(updateLax); */
  }

}
