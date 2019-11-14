import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) {

  }

  getRecorders() {
    const params = {
      authenticationAccount: window.localStorage.getItem('uname'),
      authenticationToken: window.localStorage.getItem('session')
    }

    return this.http.get<any>(
      `/admin/record_order/agent?authenticationAccount=${params.authenticationAccount}&authenticationToken=${params.authenticationToken}`, {
      }
    )
  }
}









