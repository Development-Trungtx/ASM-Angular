import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../ServiceProduct/service.service';
import {Item} from './entity';
import {Product} from '../ModelProduct/Product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class CartProductComponent implements OnInit {

  items: Item[] = [];
  total = 0;
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.productService.getProductByID(id).subscribe(data => {
          this.product = data;
          let item: Item = {
            product: this.product,
            quantity: 1
          };
          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (let i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product.productId == id) {
                index = i;
                break;
              }
            }
            console.log(index);
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              let item: Item = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem('cart', JSON.stringify(cart));
            }
          }
          this.loadCart();
          this.router.navigateByUrl('cartProduct');
        });
      } else {
        this.loadCart();
      }
    });
  }


  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart?.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  update(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    let quantityUpdate = null;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      quantityUpdate = document.getElementById(String(id))['value'];
      if (item.product.productId == id) {
        index = i;
        break;
      }
    }
    let item: Item = JSON.parse(cart[index]);
    item.quantity = Number(quantityUpdate);
    cart[index] = JSON.stringify(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
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
