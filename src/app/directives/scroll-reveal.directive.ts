import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterContentInit {
  @Input() container: string;
  @Input() direction: string;
  @Input() delay: string;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    (<any> window).ScrollReveal().reveal(this.el.nativeElement, {
      distance: '150%',
      origin: this.direction || 'left',
      delay: parseInt(this.delay, 10) || 100,
      container: document.querySelector(this.container || 'html')
    });
  }

}
