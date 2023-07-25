import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkedComponent } from './components/worked/worked.component';

const routes: Routes = [ { path: 'home', component: HomeComponent },
{path:'home',component:HomeComponent},
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'skills', component: MySkillsComponent },
{ path: 'contact', component:ContactComponent},
{path: 'project', component:ProjectsComponent},
{path:'worked',component:WorkedComponent},
{path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
