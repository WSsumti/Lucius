import { AfterViewInit, Component } from '@angular/core';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { SampleData } from 'src/sample-data/sample-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  groupIcon = faUserGroup;
  sampleData = SampleData.PostData;
}
