import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {Users} from '../ModelProduct/Users';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {
  userr: Users;

  constructor(private userSeriver: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    let userEmail = sessionStorage.getItem('username');
    this.userSeriver.getAllUserByEmail(userEmail).subscribe(
      value => {
          this.userr = value;
      }
    );
  }
}
