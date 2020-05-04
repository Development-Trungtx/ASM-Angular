import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../ModelProduct/Users';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';

@Component({
  selector: 'app-client-manager-user-update',
  templateUrl: './client-manager-user-update.component.html',
  styleUrls: ['./client-manager-user-update.component.scss']
})
export class ClientManagerUserUpdateComponent implements OnInit {

  imgDefault = '';
  userByID: Users = new Users();

  constructor(private userService: AuthenticationService, private router: ActivatedRoute, private routerRe: Router) {
  }

  ngOnInit(): void {
    this.loadByUser();
  }

  loadByUser() {
    this.router.params.subscribe(
      param => {
        this.userService.getUserPrByID(param.idUpdate).subscribe(
          value => {
            this.userByID = value;
            this.imgDefault = this.userByID.imges;
          }
        );
      }
    );
  }
  loadIImges() {
    this.imgDefault = this.userByID.imges;
  }

  updateUser(){
    this.userService.updateUser(this.userByID).subscribe(
      value => {
        alert("Update successful !");
        this.routerRe.navigateByUrl('/userInfo');
      }
    );
  }

}
