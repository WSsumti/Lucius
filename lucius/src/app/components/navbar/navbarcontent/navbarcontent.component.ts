import { Component } from '@angular/core';
import { faHandshake, faNewspaper, faPerson, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbarcontent',
  templateUrl: './navbarcontent.component.html',
  styleUrls: ['./navbarcontent.component.css']
})
export class NavbarcontentComponent {
  buyIcon = faStore;
  rentIcon = faHandshake;
  agentIcon = faPerson;
  newsIcon = faNewspaper;
}
