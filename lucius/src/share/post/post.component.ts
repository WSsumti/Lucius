import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() Name!: string;
  @Input() Content!: string;
  edge: number = 35;
  @Input() Avatar: string = '../../assets/ava.png';
  @Input() Pic: string = '../../assets/default.jpg';
}
