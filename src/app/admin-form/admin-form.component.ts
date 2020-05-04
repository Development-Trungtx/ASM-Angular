import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../ServiceProduct/service.service';
import {Product} from '../ModelProduct/Product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypePro} from '../ModelProduct/TypePro';
import {spacesNull} from '../Validation/InsertProduct/NullSpaces';
import {checkPriceSale} from '../Validation/InsertProduct/CheckPrice';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  typePro: TypePro[];
  product: Product = new Product();
  imgDefault;

  constructor(private servicePro: ServiceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.load();
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, spacesNull()]],
      pricePro: ['', Validators.required],
      salePro: ['', Validators.required],
      numberPro: ['', Validators.required],
      typePro: ['', Validators.required],
      proDesc: ['', [Validators.required, spacesNull()]],
      img: ['', [Validators.required, spacesNull()]],
    }, {
      validator: checkPriceSale('pricePro', 'salePro', 'numberPro')
    });
  }

  load() {
    this.servicePro.getAllTypeProduct().subscribe(
      (getAll) => {
        this.typePro = getAll;
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.product.name = this.registerForm.value.name;
    this.product.price = this.registerForm.value.pricePro;
    this.product.sale = this.registerForm.value.salePro;
    this.product.total = this.registerForm.value.numberPro;
    this.product.nameTypePro = this.registerForm.value.typePro;
    this.product.image = this.registerForm.value.img;
    this.product.descrition = this.registerForm.value.proDesc;

    console.log(this.product);


    this.servicePro.insertProduct(this.product).subscribe(
      data => {
        alert('insert success !!!! ');
        this.onReset();
      }
    );
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  loadIImges() {
    console.log('ảnh nè:' + this.registerForm.value.img);
    this.imgDefault = this.registerForm.value.img;
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
