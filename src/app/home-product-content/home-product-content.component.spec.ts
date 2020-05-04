import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductContentComponent } from './home-product-content.component';

describe('HomeProductContentComponent', () => {
  let component: HomeProductContentComponent;
  let fixture: ComponentFixture<HomeProductContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
