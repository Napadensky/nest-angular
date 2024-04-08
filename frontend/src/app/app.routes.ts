import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    // redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];

