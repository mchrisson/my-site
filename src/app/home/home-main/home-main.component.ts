import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
  animations: [
    trigger('expand', [
      state('to', style({ width: '{{width}}'}), { params: {width: '0px'}}),
      transition('* => to', [animate('{{duration}}s ease-in')], { params: {duration: '1'}})
    ])
  ]
})
export class HomeMainComponent implements OnInit, AfterViewInit {

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

  ngOnInit() {
  }

  ngAfterViewInit() {
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
}
