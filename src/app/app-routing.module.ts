import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{
    path: '',
    component: AdminLayoutComponent,
    children : [
      { path: 'Login', component: LoginComponent,pathMatch: 'full'},
      {path: 'Dashboard', component: DashboardComponent},
      {path:'', component: DashboardComponent},
    ]
},
{
  path: '',
  component: SiteLayoutComponent,
  children : [
      { path: 'Home', component: HomeComponent },
      { path: 'About', component: AboutComponent },      
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
