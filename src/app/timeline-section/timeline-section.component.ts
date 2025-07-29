import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  logo: string;
  title: string;
  subTitle: string;
  duration: string;
  bullets: string[];
}

@Component({
  selector: 'app-timeline-section',
  templateUrl: './timeline-section.component.html',
  imports: [CommonModule],
  styleUrls: ['./timeline-section.component.css'],
})
export class TimelineSectionComponent {
}
