/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindContentService } from './find-content.service';

describe('Service: FindContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindContentService]
    });
  });

  it('should ...', inject([FindContentService], (service: FindContentService) => {
    expect(service).toBeTruthy();
  }));
});
