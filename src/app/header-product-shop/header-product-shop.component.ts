import {Component, OnInit} from '@angular/core';
import {Item} from '../cart-product/entity';
import {Product} from '../ModelProduct/Product';
import {AuthenticationService} from '../ServiceProduct/service/authentication.service';

@Component({
  selector: 'app-header-product-shop',
  templateUrl: './header-product-shop.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class HeaderProductShopComponent implements OnInit {
  items: Item[] = [];
  total = 0;
  product: Product;
  numberPro: number;

  constructor(public loginservice: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    this.numberPro = cart?.length;
    for (let i = 0; i < cart?.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  remove(id: number): void {
    const cart: any = JSON.parse(localStorage.getItem('cart'));
    const index = -1;
    for (let i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.productId === id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }

}
