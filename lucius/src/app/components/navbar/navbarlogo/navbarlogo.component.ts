import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarlogo',
  templateUrl: './navbarlogo.component.html',
  styleUrls: ['./navbarlogo.component.css']
})
export class NavbarlogoComponent {
  @Input() imgLink?: string;
  @Input() width?: number;
  @Input() alt?: string;
}
