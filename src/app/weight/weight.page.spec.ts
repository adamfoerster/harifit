import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightPage } from './weight.page';

describe('WeightPage', () => {
  let component: WeightPage;
  let fixture: ComponentFixture<WeightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
