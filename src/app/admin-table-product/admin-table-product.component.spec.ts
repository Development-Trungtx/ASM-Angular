import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableProductComponent } from './admin-table-product.component';

describe('AdminTableProductComponent', () => {
  let component: AdminTableProductComponent;
  let fixture: ComponentFixture<AdminTableProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTableProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
