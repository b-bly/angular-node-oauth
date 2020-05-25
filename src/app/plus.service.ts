import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlusService {

  constructor(private http: HttpClient) { }

  async getPlusInfo<T>() {
    try {
      let params: any = {};
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        params = {
          headers: new HttpHeaders()
        };
        params.headers.append('Content-Type', 'application/json; charset=utf-8');
        params.headers.append(`Authorization`, `Bearer ${jwt}`);
      }
      const res = <Promise<T>>this.http.get('/plus', {params}).toPromise();
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
