import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminformComponent } from './adminform/adminform.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'team', component: TeamComponent },
  { path: 'admin', component: AdminformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
