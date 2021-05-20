import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  // private baseUrl = 'https://reqres.in/api/users';
  
 url="https://reqres.in/api/users";
  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>
  {
    return this.http.get<any[]>
    ("https://reqres.in/api/users");
  }

  createUsers(data:any){
    return this.http.post(this.url,data);
  }

  deleteUser(id:number){
    return this.http.delete('${this.url}/${id}');
  }



  // createUsers(user: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}`, this.createUsers);
  // }

  // deleteUsers(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

}
