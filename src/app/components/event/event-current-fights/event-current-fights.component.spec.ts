import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCurrentFightsComponent } from './event-current-fights.component';

describe('EventCurrentFightsComponent', () => {
  let component: EventCurrentFightsComponent;
  let fixture: ComponentFixture<EventCurrentFightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EventCurrentFightsComponent]
    });
    fixture = TestBed.createComponent(EventCurrentFightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
