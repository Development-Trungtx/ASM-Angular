import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypeProductComponent } from './admin-type-product.component';

describe('AdminTypeProductComponent', () => {
  let component: AdminTypeProductComponent;
  let fixture: ComponentFixture<AdminTypeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
