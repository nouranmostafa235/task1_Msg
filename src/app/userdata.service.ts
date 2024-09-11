import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  getUserData():Observable<any>{
    return this.http.get("http://localhost:3000/data")
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
