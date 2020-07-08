import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BourbonParameterRangeComponent } from './bourbon-parameter-range.component';

describe('BourbonParameterRangeComponent', () => {
  let component: BourbonParameterRangeComponent;
  let fixture: ComponentFixture<BourbonParameterRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BourbonParameterRangeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BourbonParameterRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
