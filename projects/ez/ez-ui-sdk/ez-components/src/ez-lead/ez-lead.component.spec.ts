import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzLeadComponent } from './ez-lead.component';

describe('EzLeadComponent', () => {
  let component: EzLeadComponent;
  let fixture: ComponentFixture<EzLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
