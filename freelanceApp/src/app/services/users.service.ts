import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { } 
 
  commonURL = "http://localhost:4000/"

  getAllposts():Observable<any>{
    return this._http.get(`${this.commonURL}allPosts`)
  } 
  register(userdata:any):Observable<any>{
    return this._http.post(`${this.commonURL}register`, userdata)
  }
  addPost(userdata:any):Observable<any>{
    return this._http.post(`${this.commonURL}addpost`, userdata)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}login`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonURL}logout`, null)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonURL}user`)
  }
  upload(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}addpost`,data)
  }
}
