import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypesComponent } from './body-types.component';

describe('BodyTypesComponent', () => {
  let component: BodyTypesComponent;
  let fixture: ComponentFixture<BodyTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
