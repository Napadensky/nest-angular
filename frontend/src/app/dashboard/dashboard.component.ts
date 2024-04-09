import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router: Router) {
    console.log('dashboard');
  }
  ngOnInit(): void {}

  goToList() {
    // this.router.navigate(['/admin']);
    console.log('go to list');
    this.router.navigate(['']);
  }
}
