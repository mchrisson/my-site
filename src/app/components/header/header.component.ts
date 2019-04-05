import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  options = {
    menuWidth: 300, // Default is 240
    edge: 'right' // Choose the horizontal origin
  };
  themes = [
    { color: '#b8a3ca', name: 'light', class: 'theme-light'},
    { color: '#371157', name: 'purple', class: 'theme-purple'},
    { color: '#a42525', name: 'red', class: 'theme-red'},
  ];

  modalActions = new EventEmitter<string|MaterializeAction>();

  ngOnInit() {
  }

  closeModal() {
    this.modalActions.emit({action: 'sideNav', params: ['close']});
  }

  onSelectTheme(theme) {
    ( <any> document.getElementsByTagName('html')[0].classList).replace(this.getCurrentTheme(), theme.class);
  }

  getCurrentTheme() {
    const classList = document.getElementsByTagName('html')[0].classList;
    for ( let i = 0; i < classList.length; i++) {
      const classItem = classList[i];
      if (classItem.startsWith('theme-')) {
        return classItem;
      }
    }
    return '';
  }

}
