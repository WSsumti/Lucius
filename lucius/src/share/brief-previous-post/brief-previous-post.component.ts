import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brief-previous-post',
  templateUrl: './brief-previous-post.component.html',
  styleUrls: ['./brief-previous-post.component.css'],
})
export class BriefPreviousPostComponent {
  edge: number = 50;
  @Input() Name!: string;
  @Input() Owner!: string;
  @Input() Pic: string = '../../assets/default.jpg';
}
