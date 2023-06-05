import { Component } from '@angular/core';
import { SampleData } from 'src/sample-data/sample-data';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css'],
})
export class ChatbarComponent {
  sampleData = SampleData.AgencyData;
}
