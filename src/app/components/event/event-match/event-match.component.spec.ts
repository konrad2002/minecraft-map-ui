import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMatchComponent } from './event-match.component';

describe('EventMatchComponent', () => {
  let component: EventMatchComponent;
  let fixture: ComponentFixture<EventMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
