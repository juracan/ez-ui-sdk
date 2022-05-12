import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzH2Component } from './ez-h2.component';

describe('EzH2Component', () => {
  let component: EzH2Component;
  let fixture: ComponentFixture<EzH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzH2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
