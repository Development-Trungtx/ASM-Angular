import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404ProductComponent } from './page404-product.component';

describe('Page404ProductComponent', () => {
  let component: Page404ProductComponent;
  let fixture: ComponentFixture<Page404ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
