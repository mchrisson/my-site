import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit, OnDestroy {

  @ViewChild('mainLandingText') mainLandingText: ElementRef;
  typed: any;

  constructor() { }

  ngOnInit() {
    const LandingTextTypedOptions = {
      strings: ['Designer.', ' Developer.',  ' Artist.'],
      typeSpeed: 80,
      backSpeed: 40,
      startDelay: 1000,
      smartBackspace: false,
      onComplete: (_) => {
        setTimeout(() => {
          this.typed.destroy();
          this.typed = new (<any>window).Typed(this.mainLandingText.nativeElement, LandingTextTypedFinalOptions);
        }, 1000);
      }
    };
    this.typed = new (<any>window).Typed(this.mainLandingText.nativeElement, LandingTextTypedOptions);

    const LandingTextTypedFinalOptions = {
      strings: ['Designer. Developer. Artist.'],
      typeSpeed: 20,
      backSpeed: 0,
      smartBackspace: false,
      showCursor: false
    };
  }

  ngOnDestroy() {
    this.typed.destroy();
  }

}
