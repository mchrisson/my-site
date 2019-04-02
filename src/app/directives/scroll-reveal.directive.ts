import { Directive, ElementRef, Input, AfterContentInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterContentInit, OnDestroy {
  @Input() container: string;
  @Input() direction: string;
  @Input() delay: string;
  @Input() duration: string;
  @Input() distance: string;
  @Output() reveal = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    (<any> window).ScrollReveal().reveal(this.el.nativeElement, {
      distance: this.distance || '150%',
      origin: this.direction || 'left',
      delay: parseInt(this.delay, 10) || 100,
      duration: parseInt(this.duration, 10) || 600,
      container: document.querySelector(this.container || 'html'),
      afterReveal: this.afterReveal.bind(this)
    });
  }

  afterReveal() {
    this.reveal.emit(true);
  }

  ngOnDestroy() {
    (<any> window).ScrollReveal().destroy();
  }

}
