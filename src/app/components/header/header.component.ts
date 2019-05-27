import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var M: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }
  sideNavOptions = {
    edge: 'right' // Choose the horizontal origin
  };
  themes = [
    { color: '#b8a3ca', name: 'light', class: 'theme-light'},
    { color: '#371157', name: 'purple', class: 'theme-purple'},
    { color: '#a42525', name: 'red', class: 'theme-red'},
  ];

  @ViewChild('colorPicker') colorPicker: ElementRef;
  @ViewChild('sideNav') sideNav: ElementRef;

  ngAfterViewInit() {
    M.Dropdown.init(this.colorPicker.nativeElement);
    M.Sidenav.init(this.sideNav.nativeElement, this.sideNavOptions);
  }

  closeModal() {
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
