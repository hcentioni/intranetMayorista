import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageThumbsComponent } from './product-image-thumbs.component';

describe('ProductImageThumbsComponent', () => {
  let component: ProductImageThumbsComponent;
  let fixture: ComponentFixture<ProductImageThumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageThumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
