import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFightComponent } from './event-fight.component';

describe('EventFightComponent', () => {
  let component: EventFightComponent;
  let fixture: ComponentFixture<EventFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
