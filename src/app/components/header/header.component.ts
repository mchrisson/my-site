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

  modalActions = new EventEmitter<string|MaterializeAction>();

  ngOnInit() {
  }

  closeModal() {
    this.modalActions.emit({action: 'sideNav', params: ['close']});
  }

}
