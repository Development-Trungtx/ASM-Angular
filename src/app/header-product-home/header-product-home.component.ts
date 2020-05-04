import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {AuthService} from 'angularx-social-login';

@Component({
  selector: 'app-header-product-home',
  templateUrl: './header-product-home.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class HeaderProductHomeComponent implements OnInit {
  name: string;
  imge: string;

  constructor(public loginservice: AuthenticationService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.name = sessionStorage.getItem('name');
    this.imge = sessionStorage.getItem('img');
  }

}
