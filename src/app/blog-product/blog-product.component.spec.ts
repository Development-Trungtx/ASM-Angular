import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogProductComponent } from './blog-product.component';

describe('BlogProductComponent', () => {
  let component: BlogProductComponent;
  let fixture: ComponentFixture<BlogProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
