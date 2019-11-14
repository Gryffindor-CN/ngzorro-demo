import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  key = 'LRIBZ-7TIHR-QR5WP-WLMOR-XRDCK-KHBXS';
  constructor(private http: HttpClient) { }

  getDistrictList() {
    return this.http.get<any>(
      `/district/list?key=${this.key}`
    )
  }

  getDistrictChildren(id: number) {
    return this.http.get<any>(
      `/district/getchildren?id=${id}&key=${this.key}`
    )
  }
}
