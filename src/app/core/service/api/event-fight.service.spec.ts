import { TestBed } from '@angular/core/testing';

import { EventFightService } from './event-fight.service';

describe('EventFightService', () => {
  let service: EventFightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
