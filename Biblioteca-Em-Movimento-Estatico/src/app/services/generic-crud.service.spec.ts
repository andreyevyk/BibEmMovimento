/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenericCrudService } from './generic-crud.service';

describe('Service: GenericCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericCrudService]
    });
  });

  it('should ...', inject([GenericCrudService], (service: GenericCrudService) => {
    expect(service).toBeTruthy();
  }));
});
