import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordPage } from './verify-password.page';

describe('VerifyPasswordPage', () => {
  let component: VerifyPasswordPage;
  let fixture: ComponentFixture<VerifyPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
