import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeTeenagerserviceService {

  private apiUrl = 'http://localhost:8082/api/notification';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  createNotification(notificationData: any) {
    return this.http.post(this.apiUrl, notificationData);
  }
}
