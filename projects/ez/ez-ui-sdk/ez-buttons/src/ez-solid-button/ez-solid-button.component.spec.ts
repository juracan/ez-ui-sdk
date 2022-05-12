import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzSolidButtonComponent } from './ez-solid-button.component';

describe('EzSolidButtonComponent', () => {
  let component: EzSolidButtonComponent;
  let fixture: ComponentFixture<EzSolidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzSolidButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzSolidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
