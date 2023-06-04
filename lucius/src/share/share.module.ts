import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMoreComponent } from './user-more/user-more.component';
import { ChatAgencyComponent } from './chat-agency/chat-agency.component';
import { BriefPreviousPostComponent } from './brief-previous-post/brief-previous-post.component';

@NgModule({
  declarations: [
    UserMoreComponent,
    ChatAgencyComponent,
    BriefPreviousPostComponent,
  ],
  imports: [CommonModule],
})
export class ShareModule {}
