import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from './db.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', providers:[LoginService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  response = {};
  isLogged = false;
  addUser = false;
  elements: any;
  navID = "";

  constructor(private db:DbService, private loginService: LoginService, private router: Router){
    this.isLogged = loginService.isLogged();
    loginService.loginConfirmed$.subscribe(
      data => {
        this.isLogged = data;
        localStorage.setItem('logged', data.toString());
        this.router.navigate(['/home']);
        //alert(data);        
      });
  }
  
}