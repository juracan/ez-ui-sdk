import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzH1Component } from './ez-h1.component';

describe('EzH1Component', () => {
  let component: EzH1Component;
  let fixture: ComponentFixture<EzH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
