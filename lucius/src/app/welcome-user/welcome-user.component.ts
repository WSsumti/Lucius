import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css'],
})
export class WelcomeUserComponent {
  @Input() isLogin!: boolean;
}
