import { TestBed } from '@angular/core/testing';

import { ExtensionCommonService } from './extension-common.service';

describe('ExtensionCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtensionCommonService = TestBed.get(ExtensionCommonService);
    expect(service).toBeTruthy();
  });
});
