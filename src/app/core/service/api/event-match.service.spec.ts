import { TestBed } from '@angular/core/testing';

import { EventMatchService } from './event-match.service';

describe('EventMatchService', () => {
  let service: EventMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
