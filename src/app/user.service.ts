import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:4567';
  }
  
  getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl + '/users');
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  
}
