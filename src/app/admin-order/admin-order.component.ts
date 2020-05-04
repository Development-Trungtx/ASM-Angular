import {Component, OnInit} from '@angular/core';
import {Users} from '../ModelProduct/Users';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceOrderService} from '../ServiceProduct/serviceOrder/service-order.service';
import {OrderPro} from '../ModelProduct/OrderPro';
import {ServiceOrderCartService} from '../ServiceProduct/serviceCart/service-order-cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  p = 1;
  pageSize = 5;
  searchText;
  orderAll: OrderPro[];
  orderDetail: OrderPro;

  constructor(private orderService: ServiceOrderCartService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    this.loadAdd();
  }


  loadAdd() {
    this.orderService.getAllOrderProduct().subscribe(
      (data) => {
        this.orderAll = data;
      }
    );
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrderProduct(id).subscribe(
      (data) => {
        this.router.navigate(['order']);
        this.loadAdd();
      }
    );
  }

  detailOrder(id: number) {
    this.orderService.getOrderPrByID(id).subscribe(
      data => {
        this.orderDetail = data;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }


  getOrder() {
    function OrderDto(id, dayOrder, nameOrder, total_money, emailUser, addressOrder, cusNameOrder, numbPhone) {
      this.orderId = id;
      this.dayOrder = dayOrder;
      this.nameOrder = nameOrder;
      this.total_money = total_money;
      this.emailUser = emailUser;
      this.addressOrder = addressOrder;
      this.cusNameOrder = cusNameOrder;
      this.numbPhone = numbPhone;
    }

    this.orderService.getAllOrderProduct().subscribe(data => {
      data.forEach(value => {
        let orDto = new OrderDto(value.orderId, value.dayOrder, value.nameOrder, value.total_money, value.emailUser,
          value.addressOrder, value.cusNameOrder, value.numbPhone);
        data.push(orDto);
      });
      data.splice(data.length / 2, data.length);
      // console.log(data);
      this.orderAll = data;
    });
  }

  onloadOrder() {
    if (this.searchText.length >= 2) {
      this.getOrder();
      this.pageSize = this.orderAll.length;
    }
    if (this.searchText.length === 0) {
      this.pageSize = 5;
    }
  }

}
