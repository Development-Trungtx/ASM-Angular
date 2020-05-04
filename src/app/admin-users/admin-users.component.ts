import {Component, OnInit} from '@angular/core';
import {Users} from '../ModelProduct/Users';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AdminUsersComponent implements OnInit {
  p = 1;
  pageSize = 5;
  searchText;
  usersAll: Users[];
  usersDetail: Users;

  constructor(private usersService: AuthenticationService,  private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadAdd();
    this.detailUsers(1);
  }


  loadAdd() {
    this.usersService.getAllUser().subscribe(
      (data) => {
        this.usersAll = data;
      }
    );
  }

  deleteUsers(id: number) {
    this.usersService.deleteUsers(id).subscribe(
      (data) => {
        this.loadAdd;
      }
    );
  }

  detailUsers(id: number){
    this.usersService.getUserPrByID(id).subscribe(
      data => {
        this.usersDetail= data;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }


  getUsers() {
    function UsersDto(id, usersName, password, role, nameCus, email, address, numberPhone) {
      this.id = id;
      this.usersName = usersName;
      this.password = password;
      this.role = role;
      this.nameCus = nameCus;
      this.email = email;
      this.address = address;
      this.numberPhone = numberPhone;
    }

    this.usersService.getAllUser().subscribe(data => {
      data.forEach(value => {
        let usDto = new UsersDto(value.userId, value.userName, value.passWord, value.roles, value.nameCustomer, value.email, value.address, value.numberPhone);
        data.push(usDto);
      });
      data.splice(data.length / 2, data.length);
      // console.log(data);
      this.usersAll = data;
    });
  }

  onloadUsers() {
    if (this.searchText.length >= 2) {
      this.getUsers();
      this.pageSize = this.usersAll.length;
    }
    if (this.searchText.length === 0) {
      this.pageSize = 5;
    }
  }
}
