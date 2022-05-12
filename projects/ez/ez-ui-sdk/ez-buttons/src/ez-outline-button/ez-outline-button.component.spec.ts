import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzOutlineButtonComponent } from './ez-outline-button.component';

describe('EzOutlineButtonComponent', () => {
  let component: EzOutlineButtonComponent;
  let fixture: ComponentFixture<EzOutlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzOutlineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzOutlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
