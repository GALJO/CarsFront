import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionYearComponent } from './production-year.component';

describe('ProductionYearComponent', () => {
  let component: ProductionYearComponent;
  let fixture: ComponentFixture<ProductionYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
