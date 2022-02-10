import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from '../db.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = "";
  password = "";
  reqAction = "";

  constructor(private db:DbService, private loginService:LoginService) { 
  }

  ngOnInit(): void {
  }

  login(){
    this.reqAction = "login";
    this.db.login(this.reqAction, this.user, this.password).subscribe(data => {
      //console.log(data);
      this.reqAction = "";
      //this.loginService.confirmLogin(true);
      //Decode data JWT and save it on the cookies or local storage
      //-------
      var base64Url = data.toString().split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      console.log(JSON.parse(jsonPayload));
      //-------
    });
  }

}
