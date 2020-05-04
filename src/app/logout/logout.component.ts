import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {Router} from '@angular/router';
import {LoginProductContentComponent} from '../login-product-content/login-product-content.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}
