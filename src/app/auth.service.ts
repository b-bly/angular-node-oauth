import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser<T>() {
    return <Promise<T>>this.http.get('/user').toPromise();
  }
}
