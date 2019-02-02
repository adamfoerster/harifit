import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnPage } from './john.page';

describe('JohnPage', () => {
  let component: JohnPage;
  let fixture: ComponentFixture<JohnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
