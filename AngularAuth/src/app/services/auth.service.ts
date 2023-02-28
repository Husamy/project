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
      
      return this.http.post<any>('http://127.0.0.1:8000/api/users/',userObj);
    }
    loginfn(loginObj:any){
      
      return this.http.post<any>('http://127.0.0.1:8000/api/api/login/',loginObj,);
      }
      isLoggedIn(): boolean {
        return !!sessionStorage.getItem(this.TOKEN_KEY);
      }
      getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY);
      }
    
      logout(): void {
        sessionStorage.removeItem(this.TOKEN_KEY);
      }
  

  }

   

