import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import animations from 'src/app/animations/animations';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
  animations: animations
})
export class HomeMainComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }
  skills = [
    { name: 'HTML', value: '0%' },
    { name: 'CSS', value: '0%' },
    { name: 'Javascript', value: '0%' },
    { name: 'Angular', value: '0%' },
    { name: 'Node.js', value: '0%' },
    { name: 'SQL', value: '0%' },
    { name: 'Mongo', value: '0%' },
    { name: 'Photoshop', value: '0%' },
    { name: 'FL Studio', value: '0%' },
    { name: 'Premiere', value: '0%' },
  ];
  @ViewChild('sectionHeader') sectionHeader: ElementRef;
  typed: any;
  showDash = false;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onHeaderReveal() {
    const sectionHeaderTypedOptions = {
      strings: ['WHOAMI'],
      typeSpeed: 80,
      backSpeed: 0,
      smartBackspace: false,
      showCursor: false,
      onComplete: (_) => { this.showDash = true; }
    };
    this.typed = new (<any>window).Typed(this.sectionHeader.nativeElement, sectionHeaderTypedOptions);
  }

  onSkillsReveal() {
    this.skills = [
      { name: 'HTML', value: '88%' },
      { name: 'CSS', value: '80%' },
      { name: 'Javascript', value: '80%' },
      { name: 'Angular', value: '75%' },
      { name: 'Node.js', value: '70%' },
      { name: 'SQL', value: '40%' },
      { name: 'Mongo', value: '60%' },
      { name: 'Photoshop', value: '65%' },
      { name: 'FL Studio', value: '70%' },
      { name: 'Premiere', value: '35%' },
    ];
  }

  getDuration(val) {
    return (parseInt(val.replace('%', ''), 10) / 160) + '';
  }

  ngOnDestroy() {
    this.typed.destroy();
  }
}
