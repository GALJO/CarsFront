import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

 @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  repeatedPassword = '';

  errorMessages: string[] = [];
  canSubmit = false;

  private emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  validate() {
    this.errorMessages = [];
    this.canSubmit = true;

    this.canSubmit = this.validateEmail();
    this.canSubmit = this.validatePassword() && this.canSubmit;
  }

   private validateEmail(): boolean {
    let isOk = true;

     if (this.email.length > 0) {
       if (!this.emailRegexp.test(this.email)) {
         this.errorMessages.push('Nieprawidłowy email');
         isOk = false;
       }
     } else {
       isOk = false;
     }

     return isOk;
   }

   private validatePassword(): boolean {
    let isOk = true;

     if (this.password.length > 0) {
       if (this.password.length < 4) {
         this.errorMessages.push('Hasło musi mieć minimum 4 znaki');
         isOk = false;
       }
       if (this.password !== this.repeatedPassword) {
         this.errorMessages.push('Hasła się różnią');
         isOk = false;
       }
     } else {
       isOk = false;
     }

     return isOk;
   }

}
