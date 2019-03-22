import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterContentInit {
  @Input() container: string;
  @Input() direction: string;
  @Input() delay: string;
  @Input() duration: string;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    (<any> window).ScrollReveal().reveal(this.el.nativeElement, {
      distance: '150%',
      origin: this.direction || 'left',
      delay: parseInt(this.delay, 10) || 100,
      duration: parseInt(this.duration, 10) || 600,
      container: document.querySelector(this.container || 'html')
    });
  }

}
