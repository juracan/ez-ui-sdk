import { TestBed } from '@angular/core/testing';

import { EzUiSdkService } from './ez-ui-sdk.service';

describe('EzUiSdkService', () => {
  let service: EzUiSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzUiSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
