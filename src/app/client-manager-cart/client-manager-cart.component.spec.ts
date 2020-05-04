import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagerCartComponent } from './client-manager-cart.component';

describe('ClientManagerCartComponent', () => {
  let component: ClientManagerCartComponent;
  let fixture: ComponentFixture<ClientManagerCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientManagerCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientManagerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
