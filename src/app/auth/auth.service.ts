import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email: string, passwd: string): void {
    console.log(email, passwd);

  }

  public logout(): void {
    console.log('logout');
  }

  public signin() {
    return null;
  }
}
