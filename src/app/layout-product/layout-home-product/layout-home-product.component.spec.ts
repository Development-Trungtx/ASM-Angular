import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomeProductComponent } from './layout-home-product.component';

describe('LayoutHomeProductComponent', () => {
  let component: LayoutHomeProductComponent;
  let fixture: ComponentFixture<LayoutHomeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHomeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHomeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
