import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiEndpoint: string = environment.apiUrl;
  endpoint: string = `${this.apiEndpoint}/users`;

  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  insert(user: UserModel) {
    return this.http.post(this.endpoint, user);
  }
}
