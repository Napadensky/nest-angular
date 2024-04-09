import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: FormGroup;
  user: UserModel;
  errors: any[] = [];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.min(2)]],
      lastName: ['', [Validators.required, Validators.min(2)]],
      age: ['', [Validators.required, , Validators.min(5)]],
      gender: ['', [Validators.required]],
      pregnancy: [false, []],
      birthdate: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  save() {
    console.log('asdasdasdasd');
    if (!this.form.valid) return;

    let userModel = new UserModel();
    userModel.firstName = this.firstName?.value;
    userModel.lastName = this.lastName?.value;
    userModel.age = this.age?.value;
    userModel.gender = this.gender?.value;
    userModel.birthdate = this.birthdate?.value;
    userModel.phoneNumber = this.phoneNumber?.value;

    if (this.gender?.value == 'female')
      userModel.pregnancy = this.pregnancy?.value;

    //TODO: Add a loader
    this.userService.insert(userModel).subscribe(
      (data) => {
        this.router.navigate(['/dashboard', data]);
      },
      (err: HttpErrorResponse) => {
        this.errors = [err.error.error];
      }
    );
    this.router.navigate(['/dashboard']);
  }

  goToList() {
    this.router.navigate(['/admin']);
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get age() {
    return this.form.get('age');
  }

  get gender() {
    return this.form.get('gender');
  }

  get pregnancy() {
    return this.form.get('pregnancy');
  }

  get birthdate() {
    return this.form.get('birthdate');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
}
