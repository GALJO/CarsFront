import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserSignIn} from './model/userSignIn.model';
import {LoginResponse} from './model/loginResponse.model';
import {Router} from '@angular/router';

const API_KEY = 'AIzaSyDkjWBHEbuhjZpUgfMzze_5UYGHVUSzWeE';
const LOGIN_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  private loginError = false;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(email: string, passwd: string): void {
    const userSignIn = new UserSignIn(email, passwd);
    this.httpClient.post<LoginResponse>(LOGIN_URL + '?key=' + API_KEY, userSignIn, httpOptions)
      .subscribe(
        response => {
          this.token = response.idToken;
          this.loginError = false;
          this.router.navigate(['/car-list']);
        },
        error => this.loginError = true);
  }

  public logout(): void {
    this.token = null;
  }

  public isLoggedIn(): boolean {
    return this.token !== null;
  }

  public hasLogginErrorOccured() {
    return this.loginError;
  }

  public signUp() {
    return null;
  }
}
