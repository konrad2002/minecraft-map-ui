import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCurrentMatchesComponent } from './event-current-matches.component';

describe('EventCurrentMatchesComponent', () => {
  let component: EventCurrentMatchesComponent;
  let fixture: ComponentFixture<EventCurrentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCurrentMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCurrentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
