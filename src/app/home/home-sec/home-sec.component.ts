import { Component, OnInit, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { data as projectData } from '../../data/projects.data';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-home-sec',
  templateUrl: './home-sec.component.html',
  styleUrls: ['./home-sec.component.scss']
})
export class HomeSecComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carouselElement; 
  actions = new EventEmitter<string>();

  constructor() {
  }
  showInitialized = false;

  projectsDataList: Project[] = projectData;

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.projectsDataList = projectData;
      this.carouselElement.nativeElement.classList.toggle("initialized");
      this.actions.emit("carousel");
    }, 2000);
  }

}