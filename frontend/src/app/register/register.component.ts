import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
  gender: string | undefined;
  pregnancy: string | undefined;
  birthdate: Date | undefined;
  numberPhone: string | undefined;

  constructor() {}

  onSubmit() {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Age:', this.age);
  }
}
