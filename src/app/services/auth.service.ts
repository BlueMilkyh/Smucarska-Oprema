import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  setUserInfo(token: string) {
    localStorage.setItem("username", token);
    localStorage.setItem("e-mail", token);
    localStorage.setItem("password", token);
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("authToken")){
      return true;
    }
    return false;
  }
  login(authRequest: User):Observable<any>{
    return this.http.post('/api/user/login', authRequest);
  }
  register(authRequest: User):Observable<any>{
    return this.http.post('/api/user/register', authRequest);
  }
  logout(){
    localStorage.removeItem("authToken");
  }
}
