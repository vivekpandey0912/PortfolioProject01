import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { WorkedComponent } from './components/worked/worked.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomepageComponent } from './components/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MySkillsComponent,
    WorkedComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SidenavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
