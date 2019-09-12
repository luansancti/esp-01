import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannetworkPage } from './scannetwork.page';

describe('ScannetworkPage', () => {
  let component: ScannetworkPage;
  let fixture: ComponentFixture<ScannetworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannetworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
