import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../ServiceProduct/service.service';
import {Product} from '../ModelProduct/Product';
import {TypePro} from '../ModelProduct/TypePro';

@Component({
  selector: 'app-shop-product-content',
  templateUrl: './shop-product-content.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class ShopProductContentComponent implements OnInit {

  p = 1;
  y = 1;
  searchText;
  pageSize = 9;

  typeProduct: TypePro[];

  constructor(private servicePro: ServiceService) {
  }

  productALL: Product[];
  detPro: Product;

  ngOnInit(): void {
    this.load();
    this.loadTypeProduct();
  }

  load() {
    this.servicePro.getAllProduct().subscribe(
      (getAll) => {
        this.productALL = getAll;
      }
    );
    this.deetailPro(15);
  }

  getProducts() {
    function ProductDto(id, productName, productPrice, productTotal, productSale, nameTypePro) {
      this.id = id;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productSale = productSale;
      this.nameTypePro = nameTypePro;
    }

    this.servicePro.getAllProduct().subscribe(data => {
      data.forEach(value => {
        let prDto = new ProductDto(value.productId, value.name, value.price, value.total, value.sale, value.nameTypePro);
        data.push(prDto);
      });
      data.splice(data.length / 2, data.length);
      // console.log(data);
      this.productALL = data;
    });
  }

  onloadPro() {
    if (this.searchText.length >= 2) {
      this.getProducts();
      this.pageSize = this.productALL.length;
    }
    if (this.searchText.length === 0) {
      this.pageSize = 9;
    }
  }

  deetailPro(id: number) {
    this.servicePro.getProductByID(id).subscribe(
      data => {
        this.detPro = data;
      }
    );
  }

  loadByType(type){
    this.searchText = type;
    if (this.searchText.length >= 2) {
      this.getProducts();
      this.pageSize = this.productALL.length;
    }
    if (this.searchText.length === 0) {
      this.pageSize = 9;
    }
  }

  loadTypeProduct() {
    this.servicePro.getAllTypeProduct().subscribe(
      data => {
        this.typeProduct = data;
      }
    );
  }

}
