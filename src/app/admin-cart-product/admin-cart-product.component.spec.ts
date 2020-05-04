import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartProductComponent } from './admin-cart-product.component';

describe('AdminCartProductComponent', () => {
  let component: AdminCartProductComponent;
  let fixture: ComponentFixture<AdminCartProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCartProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
