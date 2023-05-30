import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarlogoComponent } from './components/navbar/navbarlogo/navbarlogo.component';
import { NavbarcontentComponent } from './components/navbar/navbarcontent/navbarcontent.component';
import { NavbaruserComponent } from './components/navbar/navbaruser/navbaruser.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarlogoComponent,
    NavbarcontentComponent,
    NavbaruserComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
