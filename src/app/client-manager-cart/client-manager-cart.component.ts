import {Component, OnInit} from '@angular/core';
import {ServiceOrderService} from '../ServiceProduct/serviceOrder/service-order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {CartProducs} from '../ModelProduct/CartProducs';

@Component({
  selector: 'app-client-manager-cart',
  templateUrl: './client-manager-cart.component.html',
  styleUrls: ['./client-manager-cart.component.scss']
})
export class ClientManagerCartComponent implements OnInit {

  cartAll: CartProducs[];
  totalMany = 0;

  constructor(private cartPrService: ServiceOrderService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.router.params.subscribe(
      param => {
        this.cartPrService.getAllCartByOrder(param.idCartClient).subscribe(
          (data) => {
            this.cartAll = data;
            for (let i = 0; i < this.cartAll.length; i++) {
              this.totalMany = this.totalMany + (this.cartAll[i].price * this.cartAll[i].amount);
            }
          }
        );
      }
    );

  }

}
