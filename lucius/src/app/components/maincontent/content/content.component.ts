import { Component } from '@angular/core';
import { SampleData } from 'src/sample-data/sample-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  sampleData = SampleData.ContentPostData;
}
