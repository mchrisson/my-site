import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  @ViewChild('bgCanvas') bgCanvas: ElementRef;
  canvas: ElementRef['nativeElement'];
  ctx;

  ngOnInit() {
    this.canvasInit();
  }

  canvasInit() {
    // console.log(this.bgCanvas);
    this.canvas = this.bgCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

    window.addEventListener('resize', resizeCanvas.bind(this), false);
    function resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.canvasDraw();
    }

    this.canvasDraw();
  }

  canvasDraw() {
    // this.ctx.beginPath();
    // this.ctx.arc(100, 100, 50, 0, Math.PI * 2, false); // Earth orbit
    // this.ctx.stroke();
    const normDenom = ( (this.canvas.height * this.canvas.width) / 255 );
    for (let i = -100; i <= this.canvas.height + 50; i += 50) {
      for (let j = -100; j < this.canvas.width + 50; j += 50) {
        const color: number = i * j / normDenom + 80;
        this.ctx.fillStyle = 'rgba(' + (color + 20 ) + ', ' + ( 125 - color ) + ', ' + (320 - color) + ', 0.02)';
        this.ctx.beginPath();
        this.ctx.moveTo(i, j);
        this.ctx.lineTo(j, i);
        this.ctx.lineTo(j, j + i);
        this.ctx.fill();
      }
    }

    // this.ctx.fillStyle = '#111';
    const points = [];
    for (let j = -50; j < this.canvas.height + 150; j = this.getRandomBetween(j + 60, j + 100)) {
      const row = [];
      for (let i = -50; i <= this.canvas.width + 250; i = this.getRandomBetween(i + 80, i + 150)) {
        const cj = this.getRandomBetween(j - 20, j + 50);
        // this.ctx.beginPath();
        // this.ctx.arc(i, cj, 2, 0, 2 * Math.PI);
        // this.ctx.fill();
        row.push([i, cj]);
      }
      points.push(row);
    }
    // console.log(points);
    for (let j = 0; j < points.length; j++) {
      for (let i = 1; i < points[j].length - 1; i++) {
        if ( j + 1 < points.length) {
          this.ctx.beginPath();
          this.ctx.moveTo(points[j][i][0], points[j][i][1]);
          this.ctx.lineTo(points[j][i - 1][0], points[j][i - 1][1]);
          const ci = i < points[j + 1].length ? i : (points[j + 1].length - 1);
          this.ctx.lineTo(points[j + 1][ci][0], points[j + 1][ci][1]);

          const grd = this.ctx.createLinearGradient(points[j][i - 1][0], points[j][i - 1][1], points[j + 1][ci][0], points[j + 1][ci][1]);
          grd.addColorStop(1, 'rgba(0,0,0,0.6)');
          grd.addColorStop(0, 'rgba(0,0,0,0.2)');
          this.ctx.fillStyle = 'rgba(0,0,0,0.4)'; // grd;
          this.ctx.fill();
        }
      }
    }
    const lenj = points.length - 1;
    const leni = points[lenj].length - 1;
    // this.ctx.fillRect(points[0][0][0], points[0][0][1], points[lenj][leni][0], points[lenj][leni][1]);
  }

  getRandomBetween = function(a, b) {
    return a + Math.round( Math.random() * (b - a) );
  };

}
