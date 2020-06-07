import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser<T>() {
    return <Promise<T>>this.http.get('/api/user').toPromise();
  }

  async getPlusInfo<T>() {
    try {
      return <Promise<T>>this.http.get('/api/plus').toPromise();
    } catch (e) {
      if (e.status == 401) {
        return {
          status: 401
        }
      } else {
        throw e;
      }
    }
  }
}
