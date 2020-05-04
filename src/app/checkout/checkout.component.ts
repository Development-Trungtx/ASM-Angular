import {Component, OnInit} from '@angular/core';
import {Item} from '../cart-product/entity';
import {Product} from '../ModelProduct/Product';
import {OrderPro} from '../ModelProduct/OrderPro';
import {ServiceOrderService} from '../ServiceProduct/serviceOrder/service-order.service';
import {ServiceOrderCartService} from '../ServiceProduct/serviceCart/service-order-cart.service';
import {uuid} from 'uuidv4';
import {CartProducs} from '../ModelProduct/CartProducs';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {spacesNull} from '../Validation/InsertProduct/NullSpaces';
import {checkSDT} from '../Validation/InsertCart/checkSDT';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class CheckoutComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  orderPro: OrderPro = new OrderPro();
  items: Item[] = [];
  cartItems: Item[] = [];
  cartProducts: CartProducs[] = [];
  total = 0;
  product: Product;
  emailSession;

  constructor(
    private cartService: ServiceOrderService,
    private orderService: ServiceOrderCartService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadCart();
    this.registerForm = this.formBuilder.group({
      nameCus: ['', [Validators.required, spacesNull()]],
      address: ['', [Validators.required, spacesNull(), Validators.minLength(6)]],
      sdt: ['', [Validators.required, spacesNull(), checkSDT(), Validators.minLength(10)]],
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
    let userr = sessionStorage.getItem('username');
    this.emailSession = userr;

  }

  get f() {
    return this.registerForm.controls;
  }

  insertAllCartOrder() {
    /*Validators*/
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.orderPro.addressOrder = this.registerForm.value.address;
    this.orderPro.cusNameOrder = this.registerForm.value.nameCus;
    this.orderPro.numbPhone = this.registerForm.value.sdt;
    /*Insert Cart*/
    let uuidd = uuid();

    function orderPro(codeOrders, totals, emailUser, addressOrder, cusNameOrder, numbPhone) {
      this.nameOrder = codeOrders;
      this.total_money = totals;
      this.emailUser = emailUser;
      this.addressOrder = addressOrder;
      this.cusNameOrder = cusNameOrder;
      this.numbPhone = numbPhone;
    }

    let orderSetup = new orderPro(uuidd, this.total, this.emailSession, this.orderPro.addressOrder, this.orderPro.cusNameOrder, this.orderPro.numbPhone);
    this.orderPro = orderSetup;
    this.orderService.insertOrderProduct(this.orderPro).subscribe();

    // console.log("tên order nè: "+this.orderPro.nameOrder);

    function cartProDto(image, price, amount, orderNumber, proName, productID) {
      this.imges = image;
      this.price = price;
      this.amount = amount;
      this.orderNumber = orderNumber;
      this.proName = proName;
      this.productID = productID;
    }

    this.cartItems = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    let receiptItem = null;
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.cartItems.push({
        product: item.product,
        quantity: item.quantity
      });
      receiptItem = new cartProDto(item.product.image, item.product.price, item.quantity, this.orderPro.nameOrder, item.product.name,item.product.productId);
      this.cartProducts[i] = receiptItem;
    }
    // console.log("cart ne:" + this.cartProducts.);
    this.cartService.insertCartProducs(this.cartProducts, this.orderPro.nameOrder).subscribe();
    localStorage.removeItem('cart');
    this.router.navigateByUrl('/cartProduct');
  }
}
