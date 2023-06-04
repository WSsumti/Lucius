import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarlogoComponent } from './components/navbar/navbarlogo/navbarlogo.component';
import { NavbarcontentComponent } from './components/navbar/navbarcontent/navbarcontent.component';
import { NavbaruserComponent } from './components/navbar/navbaruser/navbaruser.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainContentComponent } from './components/maincontent/maincontent.component';
import { SidebarComponent } from './components/maincontent/sidebar/sidebar.component';
import { ContentComponent } from './components/maincontent/content/content.component';
import { ChatbarComponent } from './components/maincontent/chatbar/chatbar.component';
import { ShareModule } from 'src/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarlogoComponent,
    NavbarcontentComponent,
    NavbaruserComponent,
    MainContentComponent,
    SidebarComponent,
    ContentComponent,
    ChatbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
