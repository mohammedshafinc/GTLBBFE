import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  public loginUrl: string = 'http://localhost:8090/enlife/login';
  public regUrl:string = 'http://localhost:8090/enlife/register'

  userLogin(data: any): Observable<any> {
    return this.http.post(this.loginUrl,data)
  }

  userReg(data:any):Observable<any> {
    console.log(data);
    return this.http.post(this.regUrl,data)

  }
}
