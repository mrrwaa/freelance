import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { } 

  getAllData():Observable<any>{
    return this._http.get('http://localhost:4000/allUsers')
  }
  registerUser(userData:any):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/signUp', userData)
  }
}
