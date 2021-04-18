import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8000/users';
  constructor(private http: HttpClient) {}

  create(user: IUser) {
    return this.http.post<any>(this.baseUrl, user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<any>(this.baseUrl);
  }

  saveUserInLocalStorage(user: string): void {
    localStorage.setItem('user', user);
  }

  getUserFromLocalStorage(): string | null {
    return localStorage.getItem('user');
  }
}
