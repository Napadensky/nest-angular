import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  userId: string;
  user: UserModel;

  constructor(
    private userService: UserService,
    private avRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userId = this.avRoute.snapshot.params['_id'];
  }

  ngOnInit(): void {
    this.userService.getById(this.userId).subscribe(
      (data) => {
        this.user = data as UserModel;
        if (!this.user) {
          this.router.navigate(['/register']);
        }
      },
      (err: HttpErrorResponse) => {
        console.error(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
