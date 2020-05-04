import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductContentComponent } from './shop-product-content.component';

describe('ShopProductContentComponent', () => {
  let component: ShopProductContentComponent;
  let fixture: ComponentFixture<ShopProductContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
