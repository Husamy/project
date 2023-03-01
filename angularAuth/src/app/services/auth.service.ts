import { HttpClientModule ,HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl:string = "http://127.0.0.1:8000/users/"
  private readonly TOKEN_KEY = 'myapp_token';
  constructor(private http : HttpClient) {}


    signup(userObj:any){

      return this.http.post<any>('http://10.1.1.44:8001/api/users/',userObj);
    }
    loginfn(loginObj:any){

      return this.http.post<any>('http://10.1.1.44:8001/api/login/',loginObj,);
      }
      isLoggedIn(): boolean {
        return !!sessionStorage.getItem(this.TOKEN_KEY);
      }
      getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY);
      }

      logout() {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + this.getToken
          })
        };
        this.http.get<any>('http://10.1.1.44:8001/api/logout/',httpOptions);
              }



  }



