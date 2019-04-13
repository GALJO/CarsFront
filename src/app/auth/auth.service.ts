import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRequest} from './model/userSignIn.model';
import {LoginResponse} from './model/loginResponse.model';
import {Router} from '@angular/router';

const API_KEY = 'AIzaSyDkjWBHEbuhjZpUgfMzze_5UYGHVUSzWeE';
const LOGIN_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
const SIGN_UP_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = null;
  private loginError = false;
  private signUpError = false;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(email: string, passwd: string): void {
    const userSignIn = new UserRequest(email, passwd);
    this.httpClient.post<LoginResponse>(LOGIN_URL + '?key=' + API_KEY, userSignIn, httpOptions)
      .subscribe(
        response => {
          this.token = response.idToken;
          this.loginError = false;
          this.router.navigate(['/car-list']);
        },
        error => this.loginError = true);
  }

  public signUp(email: string, passwd: string) {
    const userSignUp = new UserRequest(email, passwd);
    this.httpClient.post(SIGN_UP_URL + '?key=' + API_KEY, userSignUp, httpOptions)
      .subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => this.signUpError = true);
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

  public hasSignUpErrorOccured() {
    return this.signUpError;
  }
}
