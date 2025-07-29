import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TimelineSectionComponent } from '../app/timeline-section/timeline-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TimelineSectionComponent]
})
export class AppComponent {
  //@ViewChild('skillsChartCanvas') skillsChartRef!: ElementRef<HTMLCanvasElement>;
  //chart!: Chart;

}
