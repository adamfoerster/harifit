import { TestBed } from '@angular/core/testing';

import { ObjectiveService } from './objective.service';

describe('ObjectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectiveService = TestBed.get(ObjectiveService);
    expect(service).toBeTruthy();
  });
});
