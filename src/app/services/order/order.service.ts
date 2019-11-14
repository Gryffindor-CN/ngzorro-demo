import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(data: {
    userName: string,
    pageNum: number,
    number: number | string,
    pageSize: number, suid: string
  }) {
    const params = {
      authenticationAccount: window.localStorage.getItem('uname'),
      authenticationToken: window.localStorage.getItem('session')
    }
    return this.http.post<any>(
      `/admin/order/list/get?authenticationAccount=${params.authenticationAccount}&authenticationToken=${params.authenticationToken}`, {
        ...data
      }
    )
  }
}
