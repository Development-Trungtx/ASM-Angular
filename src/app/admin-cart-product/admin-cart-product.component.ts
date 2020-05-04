import {Component, OnInit} from '@angular/core';
import {Users} from '../ModelProduct/Users';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceOrderService} from '../ServiceProduct/serviceOrder/service-order.service';
import {CartProducs} from '../ModelProduct/CartProducs';
import {ServiceService} from '../ServiceProduct/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-cart-product',
  templateUrl: './admin-cart-product.component.html',
  styleUrls: ['./admin-cart-product.component.scss']
})
export class AdminCartProductComponent implements OnInit {

  p = 1;
  pageSize = 3;
  searchText;
  cartAll: CartProducs[];
  cartDetail: CartProducs;

  constructor(private cartPrService: ServiceOrderService,  private modalService: NgbModal, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadAdd();
  }


  loadAdd() {
    this.router.params.subscribe(
      param => {
        this.cartPrService.getAllCartByOrder(param.idCart).subscribe(
          (data) => {
            this.cartAll = data;
          }
        );
      }
    );

  }

  deleteCart(id: number) {
    this.cartPrService.deleteCartProducs(id).subscribe(
      (data) => {
        this.loadAdd;
      }
    );
  }

  detailCart(id: number){
    this.cartPrService.getCartPrByID(id).subscribe(
      data => {
        this.cartDetail= data;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }


  getCart() {
    function CartDto(cardProductId, imges, price, amount, orderNumber, proName) {
      this.cardProductId = cardProductId;
      this.imges = imges;
      this.price = price;
      this.amount = amount;
      this.orderNumber = orderNumber;
      this.proName = proName;
    }

    this.cartPrService.getAllCartProduct().subscribe(data => {
      data.forEach(value => {
        let usDto = new CartDto(value.cardProductId, value.imges, value.price, value.amount, value.orderNumber, value.proName);
        data.push(usDto);
      });
      data.splice(data.length / 2, data.length);
      this.cartAll = data;
    });
  }

  onloadCart() {
    if (this.searchText.length >= 2) {
      this.getCart();
      this.pageSize = this.cartAll.length;
    }
    if (this.searchText.length === 0) {
      this.pageSize = 5;
    }
  }

}
