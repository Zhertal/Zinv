import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = "http://localhost/zinvserver/";
  constructor(private http:HttpClient) { }

  login(reqAction:string, username:string, password:string){
    return this.http.post(this.url+'users.php', JSON.stringify({reqAction, username, password}));
  }

  newUser(){}

  allUsers(){}

  editUser(){}

  deleteUser(){}


  
}
