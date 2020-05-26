import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlusService {

  constructor(private http: HttpClient) { }

  async getPlusInfo<T>() {
    try {
      const jwt = window.localStorage.getItem("jwt");
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + jwt
        })
      };
      if (jwt) {

        httpOptions.headers.append(`Authorization`, `Bearer ${jwt}`);
      }
      const res = <Promise<T>>this.http.get('/plus').toPromise();
      return res;

      
      // return await this.get('/api/movies');
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
