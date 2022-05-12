import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzUiSdkComponent } from './ez-ui-sdk.component';

describe('EzUiSdkComponent', () => {
  let component: EzUiSdkComponent;
  let fixture: ComponentFixture<EzUiSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzUiSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzUiSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
