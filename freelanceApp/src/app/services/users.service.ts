import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { } 

  getAllData():Observable<any>{
    return this._http.get('http://localhost:4000/allPosts')
  }
  registerUser(userData:any):Observable<any>{
    return this._http.post('http://localhost:4000/register', userData)

  }
  
}
