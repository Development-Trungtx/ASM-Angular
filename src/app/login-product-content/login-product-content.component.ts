import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {Router} from '@angular/router';
import {CheckLogin} from '../ModelProduct/CheckLogin';
import {Role} from '../ModelProduct/Role';
import {Users} from '../ModelProduct/Users';
import {AuthService, FacebookLoginProvider, SocialUser} from 'angularx-social-login';
import {Email} from '../ModelProduct/Email';

@Component({
  selector: 'app-login-product-content',
  templateUrl: './login-product-content.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class LoginProductContentComponent implements OnInit {

  login: CheckLogin = new CheckLogin();
  role: Role;
  invalidLogin = false;
  emailCheck: Email;

  user: SocialUser;
  loggedIn: boolean;

  userss: Users = new Users();

  validation = '';

  auth2: any;

  @ViewChild('loginRef', {static: true}) loginElement: ElementRef;

  constructor(private loginservice: AuthenticationService, private router: Router, private authService: AuthService, private checkMail: AuthenticationService) {
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authen();
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.googleSDK();
    // if (localStorage.fbToken) {
    //   this.loggedIn = true;
    // }
  }


  authen() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.user != null) {
        this.userss.email = this.user.email;
        this.userss.passWord = this.user.id;
        this.userss.roles = 'client';
        this.userss.nameCustomer = this.user.name;
        this.userss.imges = this.user.photoUrl;
        this.checkMail.checkEmails(this.userss.email).subscribe(
          mail => {
            this.emailCheck = mail;
            if (this.emailCheck.checkMail == false) {
              this.loginservice.insertUsers(this.userss).subscribe(
                data => {
                  sessionStorage.setItem('username', this.userss.email);
                  sessionStorage.setItem('img', this.userss.imges);
                  sessionStorage.setItem('name', this.userss.nameCustomer);
                  this.router.navigate(['home']);
                }
              );
            } else {
              sessionStorage.setItem('username', this.userss.email);
              sessionStorage.setItem('img', this.userss.imges);
              sessionStorage.setItem('name', this.userss.nameCustomer);
              this.router.navigate(['home']);
            }
          }
        );
      }
    });
  }

  checkLogin() {
    let userNN = this.login.userN;
    let passWW = this.login.passW;
    if ((userNN.replace(/\s/g, '') == '') || (passWW.replace(/\s/g, '') == '')) {
      alert('not be empty Username or Password');
    } else if ((userNN.length == 0) || (passWW.length == 0)) {
      alert('not be empty Username or Password');
    } else {
      this.loginservice.authenticates(this.login).subscribe(
        data => {
          this.role = data;
          if (this.role == null) {
            alert('User account or password incorrect !');
          } else if (this.role.role == 'admin') {
            sessionStorage.setItem('username', this.role.nameCus);
            sessionStorage.setItem('img', this.role.imgesCus);
            this.router.navigate(['table']);
            this.invalidLogin = false;
          } else if (this.role.role == 'client') {
            sessionStorage.setItem('username', this.login.userN);
            sessionStorage.setItem('img', this.role.imgesCus);
            sessionStorage.setItem('name', this.role.nameCus);
            this.router.navigate(['home']);
          }
        }
      );
    }
  }

  /*Login in google*/
  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        this.userss.email = profile.getEmail();
        this.userss.passWord = profile.getId();
        this.userss.roles = 'client';
        this.userss.nameCustomer = profile.getName();
        this.userss.imges = profile.getImageUrl();
        this.checkMail.checkEmails(this.userss.email).subscribe(
          mail => {
            this.emailCheck = mail;
            console.log();
            if (this.emailCheck.checkMail == false) {
              // console.log("không email google nè");
              this.loginservice.insertUsers(this.userss).subscribe(
                data => {
                  sessionStorage.setItem('username', this.userss.email);
                  sessionStorage.setItem('img', this.userss.imges);
                  sessionStorage.setItem('name', this.userss.nameCustomer);
                  this.router.navigate(['home']);
                }
              );
            } else {
              // console.log("trùng email google nè");
              sessionStorage.setItem('username', this.userss.email);
              sessionStorage.setItem('img', this.userss.imges);
              sessionStorage.setItem('name', this.userss.nameCustomer);
              this.router.navigate(['home']);
            }
          }
        );
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }

  googleSDK() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '848081118672-o58nbhjtrv84tf6b1m3b9t5o24i9fnt6.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }

}
