import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminformComponent } from './adminform/adminform.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'admin', component: AdminformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
