import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRangeElementComponent } from './data-range-element.component';

describe('DataRangeElementComponent', () => {
  let component: DataRangeElementComponent;
  let fixture: ComponentFixture<DataRangeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRangeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRangeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
