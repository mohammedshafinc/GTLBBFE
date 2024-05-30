import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  public loginUrl: string = 'http://localhost:8090/enlife/login';
  public regUrl: string = 'http://localhost:8090/enlife/register';
  public searchApi: string = 'http://localhost:8090/enlife/search';
  public campApi: string = 'http://localhost:8090/enlife/campregistration';
  public campDetailsApi: string = 'http://localhost:8090/enlife/camplist';
  public campCountApi:string = 'http://localhost:8090/enlife/campcount'

  userLogin(data: any): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  userReg(data: any): Observable<any> {
    console.log(data);
    // Configure HttpClient to Handle Plain Text
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.regUrl, data, { headers, responseType: 'text' });
  }
  search(searchValue: any) {
    return this.http.post(this.searchApi, searchValue);
  }

  campReg(values: any): Observable<any> {
    return this.http.post(this.campApi, values);
  }

  campData():Observable<any> {
    return this.http.get(this.campDetailsApi)
  }

  getCampCount():Observable<any> {
    return this.http.get(this.campCountApi)
  }
}
