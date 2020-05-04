import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../ServiceProduct/service.service';
import {Product} from '../ModelProduct/Product';
import {TypePro} from '../ModelProduct/TypePro';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-type-product',
  templateUrl: './admin-type-product.component.html',
  styleUrls: ['./admin-type-product.component.scss']
})
export class AdminTypeProductComponent implements OnInit {
  p = 1;
  searchText;
  registerForm: FormGroup;
  submitted = false;
  messger = '';
  messUpdate = '';

  constructor(private servicePro: ServiceService, private modalService: NgbModal, private formBuilder: FormBuilder) {
  }

  typeUpdate: TypePro = new TypePro();
  typeProALL: TypePro[];
  typeProDetail: TypePro;
  typeProduct: TypePro = new TypePro();

  ngOnInit(): void {
    this.load();
    this.detailPro(1);
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
      }
    );
  }

  load() {
    this.servicePro.getAllTypeProduct().subscribe(
      (getAll) => {
        this.typeProALL = getAll;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }

  detailPro(id: number) {
    this.servicePro.getTypePrByID(id).subscribe(
      data => {
        this.typeProDetail = data;
      }
    );
  }

  deletePro(id: number) {
    console.log('id pro: ' + id);
    this.servicePro.deleteTypeProduct(id).subscribe(
      delet => {
        this.load();
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.typeProduct.name = this.registerForm.value.name;
    this.addTypePro();
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  addTypePro() {
    this.servicePro.insertTypeProduct(this.typeProduct).subscribe(
      data => {
        this.messger = 'insert succers';
        this.load();
      }
    );
  }

  updateTypePro(id) {
    this.servicePro.updateTypeProduct(this.typeUpdate).subscribe(
      data => {
        this.messUpdate = 'update succers';
        this.load();
      }
    );
  }

  detailUpdate(id){
    this.servicePro.getTypePrByID(id).subscribe(
      data => {
        this.typeUpdate = data;
      }
    );
  }
}
