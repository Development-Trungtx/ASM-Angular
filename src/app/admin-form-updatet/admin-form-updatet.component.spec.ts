import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormUpdatetComponent } from './admin-form-updatet.component';

describe('AdminFormUpdatetComponent', () => {
  let component: AdminFormUpdatetComponent;
  let fixture: ComponentFixture<AdminFormUpdatetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormUpdatetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormUpdatetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
