import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagerOrderComponent } from './client-manager-order.component';

describe('ClientManagerOrderComponent', () => {
  let component: ClientManagerOrderComponent;
  let fixture: ComponentFixture<ClientManagerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientManagerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientManagerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
