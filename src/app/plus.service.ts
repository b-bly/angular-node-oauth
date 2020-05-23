import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlusService {

  constructor(private http: HttpClient) { }

  async getPlusInfo<T>(): Promise<T> {
    const uri = '/plus';
    try {
      const res = <Promise<T>>this.http.get(uri).toPromise();
      return res;
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }
}
