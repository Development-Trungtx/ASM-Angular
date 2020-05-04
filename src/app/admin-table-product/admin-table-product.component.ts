import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../ServiceProduct/service.service';
import {Product} from '../ModelProduct/Product';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-table-product',
  templateUrl: './admin-table-product.component.html',
  styleUrls: ['./admin-table-product.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AdminTableProductComponent implements OnInit {
  p = 1;
  pageSize = 5;
  searchText;

  constructor(private servicePro: ServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  productALL: Product[];
  productDetail: Product;

  ngOnInit(): void {
    this.load();
    this.detailPro(13);
  }

  load() {
    this.servicePro.getAllProduct().subscribe(
      (getAll) => {
        this.productALL = getAll;
      }
    );
  }

  detailPro(id: number) {
    this.servicePro.getProductByID(id).subscribe(
      data => {
        this.productDetail = data;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
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
      this.pageSize = 5;
    }
  }

  daleteProduct(id: number) {
    this.servicePro.deleteProduct(id).subscribe(
      data => {
        this.load();
      }
    );
  }


}
