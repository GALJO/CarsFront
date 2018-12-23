import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearboxesComponent } from './gearboxes.component';

describe('GearboxesComponent', () => {
  let component: GearboxesComponent;
  let fixture: ComponentFixture<GearboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
