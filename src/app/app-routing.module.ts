import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { SignupPortalComponent } from './auth/containers/signup-portal/signup-portal.component';

const routes:Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: LoginPageComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**,', redirectTo: '' }
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}