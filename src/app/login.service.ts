import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    // Observable string sources
  private loginConfirmedSource = new Subject<boolean>();

  // Observable string streams
  loginConfirmed$ = this.loginConfirmedSource.asObservable();

  // Service message commands
  confirmLogin(value: boolean){
    this.loginConfirmedSource.next(value);
  }

  isLogged(){
    if (localStorage.getItem('logged') == "true"){//------------Change for the token------------------
      return true;
    }
    return false;
  }
}
