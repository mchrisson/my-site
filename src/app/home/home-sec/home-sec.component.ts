import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { data as projectData } from '../../data/projects.data';
import { Project } from 'src/app/interfaces/project';

declare var M: any;

@Component({
  selector: 'app-home-sec',
  templateUrl: './home-sec.component.html',
  styleUrls: ['./home-sec.component.scss']
})
export class HomeSecComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carouselElement: ElementRef; 

  constructor() {
  }

  projectsDataList: Project[] = projectData;

  carouselOptions = {dist	: -30, numVisible: 3};

  ngOnInit() {
  }

  ngAfterViewInit() {
    M.Carousel.init(this.carouselElement.nativeElement, this.carouselOptions);
  }

}