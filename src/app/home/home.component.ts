import { Component, HostListener, OnInit, OnDestroy, AfterContentInit, ElementRef, NgZone } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  constructor(
    private elRef: ElementRef,
    private zone: NgZone
  ) { }

  angle = 0;
  scrollTop = 0;
  diskInView = true;

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const appHeader: any = document.querySelector('.cust-navbar');
    if ( event.target.scrollTop >= event.target.clientHeight / 2) {
      if (this.diskInView) {
        appHeader.classList.remove('navBeforeScroll');
        window.document.removeEventListener("mousemove", this.bindMouse);
        this.diskInView = false;
      }
    } else if (!this.diskInView) {
      this.diskInView = true;
      appHeader.classList.add('navBeforeScroll');
      this.zone.runOutsideAngular(() => {
        window.document.addEventListener("mousemove", this.bindMouse);
      });
    }
    this.scrollTop = event.target.scrollTop;
    this.draw();
  }

  draw() {
    requestAnimationFrame(() => {
      ( <any> document.querySelector('.rotator')).style.transform = 'rotateY(' + ( this.angle ) + 'deg)';
      ( <any> document.querySelector('.rotator')).style.transform += ' rotateX(' + ( 56 + this.scrollTop / 6 ) + 'deg)';
      ( <any> document.querySelector('.rotator')).style.transform += ' translateY(-' + ( this.scrollTop / 4 ) + '%)';
      // lax.update(event.target.scrollTop);
    });
  }

  bindMouse = (ev) => {
    this.onMouseMove(ev);
  }

  onMouseMove(event) {
    const screenWidthHalf = window.innerWidth / 2;
    const mouseX = event.clientX;
    const diff = mouseX - screenWidthHalf;
    this.angle = ( diff / screenWidthHalf ) * 20;
    this.draw();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener("mousemove", this.bindMouse);
    });
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
