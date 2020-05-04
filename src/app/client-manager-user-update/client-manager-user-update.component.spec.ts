import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagerUserUpdateComponent } from './client-manager-user-update.component';

describe('ClientManagerUserUpdateComponent', () => {
  let component: ClientManagerUserUpdateComponent;
  let fixture: ComponentFixture<ClientManagerUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientManagerUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientManagerUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
