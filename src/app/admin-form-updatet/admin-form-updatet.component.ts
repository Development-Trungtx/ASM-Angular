import {Component, OnInit} from '@angular/core';
import {TypePro} from '../ModelProduct/TypePro';
import {Product} from '../ModelProduct/Product';
import {ServiceService} from '../ServiceProduct/service.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-form-updatet',
  templateUrl: './admin-form-updatet.component.html',
  styleUrls: ['./admin-form-updatet.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AdminFormUpdatetComponent implements OnInit {

  typePro: TypePro[];
  product: Product = new Product();

  constructor(private servicePro: ServiceService, private router: ActivatedRoute, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.getByID();
    this.load();
  }

  getByID() {
    this.router.params.subscribe(
      param => {
        this.servicePro.getProductByID(param.idPro).subscribe(
          data => {
            this.product = data;
            console.log('type product: ' + this.product.nameTypePro);
          }
        );
      }
    );
  }

  load() {
    this.servicePro.getAllTypeProduct().subscribe(
      (getAll) => {
        this.typePro = getAll;
      }
    );
  }

  onSubmit(content) {
    console.log(this.product);
    this.servicePro.updateProduct(this.product).subscribe(
      data => {
        // alert('Update success !!!! ');
        this.open(content);
      }
    );
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}
