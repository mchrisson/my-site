import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import animations from 'src/app/animations/animations';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  animations: animations
})
export class SectionHeaderComponent implements OnInit, OnDestroy {

  constructor() { }
  @ViewChild('sectionHeader') sectionHeader: ElementRef;
  typed: any;
  showDash = false;
  @Input('text') text: string;

  onHeaderReveal() {
    const sectionHeaderTypedOptions = {
      strings: [this.text],
      typeSpeed: 80,
      backSpeed: 0,
      smartBackspace: false,
      showCursor: false,
      onComplete: (_) => { this.showDash = true; }
    };
    this.typed = new (<any>window).Typed(this.sectionHeader.nativeElement, sectionHeaderTypedOptions);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.typed.destroy();
  }

}
