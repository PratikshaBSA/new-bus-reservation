import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../User';
import { LoginDto } from '../model/LoginDto';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  // registerUser(user:User):Observable<User>{
  //   return this.httpClient.post<User>("http://localhost:9090/registerorupdateuser",user);

  //   // registerUser(user:User):Observable<User>{
  //   //   return this.httpClient.post<User>("http://localhost:9090/UserRestApp/rest/registeruser",user);

  //   // }
  // }
  
  registerUser(user:User) : Observable<User> {
    let url = 'http://localhost:9090/registerorupdateuser';
    return this.httpClient.post<User>(url, user);
  }

  loginUser(loginDto:LoginDto):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:9090/login",loginDto);
  }


}
