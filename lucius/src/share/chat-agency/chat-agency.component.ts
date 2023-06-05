import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-agency',
  templateUrl: './chat-agency.component.html',
  styleUrls: ['./chat-agency.component.css'],
})
export class ChatAgencyComponent {
  edge: number = 35;
  @Input() Name!: string;
  @Input() Pic: string = '../../assets/ava.png';
}
