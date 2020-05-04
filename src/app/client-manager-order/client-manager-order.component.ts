import {Component, OnInit} from '@angular/core';
import {ServiceOrderCartService} from '../ServiceProduct/serviceCart/service-order-cart.service';
import {OrderPro} from '../ModelProduct/OrderPro';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-manager-order',
  templateUrl: './client-manager-order.component.html',
  styleUrls: ['./client-manager-order.component.scss']
})
export class ClientManagerOrderComponent implements OnInit {

  orderAll: OrderPro[];
  check;

  constructor(private orderService: ServiceOrderCartService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadAdd();
  }

  loadAdd() {
    this.router.params.subscribe(
      param => {
        this.orderService.getAllOrderUser(param.idOrderPro).subscribe(
          value => {
            this.orderAll = value;
            this.check = this.orderAll[0]?.nameOrder ;
            // console.log(this.check);
          }
        );
      }
    );
  }

}
