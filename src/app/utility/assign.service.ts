import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  url: string;

  constructor(private http:HttpClient) { 
    this.url = "https://reqres.in/api/users";
  }

  public addPost(postData: any) {
    let endPoints = "/users"
    this.http.post(this.url + endPoints, postData).subscribe(data => {
      console.log(data);
    });
  }

  public deletePost(id:number) {
    let endPoints = "/users/1"
    this.http.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  // getUsers():Observable<any[]>
  // {
  //   return this.http.get<any[]>
  //   ("https://reqres.in/api/users");
  // }
}
