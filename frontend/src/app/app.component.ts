import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbAlertModule,
    DashboardComponent,
    RegisterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}
  title = 'frontend';
}
