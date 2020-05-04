import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProductContentComponent } from './login-product-content.component';

describe('LoginProductContentComponent', () => {
  let component: LoginProductContentComponent;
  let fixture: ComponentFixture<LoginProductContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProductContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
