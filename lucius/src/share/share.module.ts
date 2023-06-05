import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMoreComponent } from './user-more/user-more.component';
import { ChatAgencyComponent } from './chat-agency/chat-agency.component';
import { BriefPreviousPostComponent } from './brief-previous-post/brief-previous-post.component';
import { AppModule } from 'src/app/app.module';
import { PostComponent } from './post/post.component';
import { ReactSysComponent } from './post/react-sys/react-sys.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    UserMoreComponent,
    ChatAgencyComponent,
    BriefPreviousPostComponent,
    PostComponent,
    ReactSysComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [BriefPreviousPostComponent, ChatAgencyComponent, PostComponent],
})
export class ShareModule {}
