import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductShopComponent } from './header-product-shop.component';

describe('HeaderProductShopComponent', () => {
  let component: HeaderProductShopComponent;
  let fixture: ComponentFixture<HeaderProductShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProductShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
