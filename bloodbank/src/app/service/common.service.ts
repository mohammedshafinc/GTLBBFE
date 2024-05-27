import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  public loginUrl: string = 'http://localhost:8090/enlife/login';

  userLogin(data: any): Observable<any> {
    return this.http.post(this.loginUrl,data)
  }
}
