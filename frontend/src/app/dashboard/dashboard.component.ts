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
    private router: Router,
    private userService: UserService,
    private avRoute: ActivatedRoute
  ) {
    console.log('dashboard');
    this.userId = this.avRoute.snapshot.params['_id'];
  }

  ngOnInit(): void {
    this.userService.getById(this.userId).subscribe(
      (data) => {
        this.user = data as UserModel;
        console.log(this.user);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  goToList() {
    // this.router.navigate(['/admin']);
    console.log('go to list');
    this.router.navigate(['']);
  }
}
