import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from '../../ModelProduct/Users';
import {CheckLogin} from '../../ModelProduct/CheckLogin';
import {Role} from '../../ModelProduct/Role';
import {Email} from '../../ModelProduct/Email';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const httpOp = {
  headers: new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // /*SpringBootAPI*/
  private PATH_URL = 'https://apispringboot-trungtx.herokuapp.com/users';
  private PATH_LOGIN = 'https://apispringboot-trungtx.herokuapp.com/checkLogin';
  private PATH_EMAIL = 'https://apispringboot-trungtx.herokuapp.com/checkEmail';
  private PATH_GETEMAIL = 'https://apispringboot-trungtx.herokuapp.com/userEmail'

  constructor(private http: HttpClient) {
  }

  /*Get User*/
  getAllUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.PATH_URL).pipe(
      tap(users => ''),
      catchError(err => of([]))
    );
  }

  getUserPrByID(id: number): Observable<Users> {
    const url = `${this.PATH_URL}/${id}`;
    return this.http.get<Users>(url).pipe(
      tap(users => ''),
      catchError(err => of(new Users()))
    );
  }

  updateUser(users: Users): Observable<any> {
    return this.http.put(`${this.PATH_URL}/${users.userId}`, users, httpOptions).pipe(
      tap(updateUser => ''),
      catchError(err => of(new Users()))
    );
  }

  insertUsers(users: Users): Observable<Users> {
    return this.http.post<Users>(this.PATH_URL, users, httpOptions).pipe(
      tap((insertUsers: Users) => ''),
      catchError(err => of(new Users()))
    );
  }

  deleteUsers(id: number): Observable<Users> {
    const url = `${this.PATH_URL}/${id}`;
    return this.http.delete<Users>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete users with id = ${id}`)),
      catchError(err => of(null))
    );
  }

  /*Check Email*/
  checkEmails(mail): Observable<Email> {
    const url = `${this.PATH_EMAIL}/${mail}`;
    return this.http.get<Email>(url).pipe(
      tap(users => ''),
      catchError(err => of(new Email()))
    );
  }

  /*Get Email*/
  getAllUserByEmail(userEmail): Observable<Users> {
    const url = `${this.PATH_GETEMAIL}/${userEmail}`;
    return this.http.get<Users>(url).pipe(
      tap(users => ''),
      catchError(err => of(new Users()))
    );
  }


  /*Check Login*/

  /*Authenticate the username and password - Xác thực*/
  authenticates(users: CheckLogin): Observable<Role> {
    return this.http.post<Role>(this.PATH_LOGIN, users, httpOptions).pipe(
      tap((insertUsers: Role) => ''),
      catchError(err => of(new Role()))
    );
  }

  /*checks the session storage*/
  isUserLoggedIn() {
    let userr = sessionStorage.getItem('username');
    return !(userr === null);
  }

  /*clears the session storage of user name*/
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('img');
  }
}
