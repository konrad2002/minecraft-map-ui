import {Component, OnInit} from '@angular/core';
import {EventService} from "../../core/service/api/event.service";
import {EventModel} from "../../core/models/event/event.model";
import {
  EventCurrentMatchesComponent
} from "../../components/event/event-current-matches/event-current-matches.component";

@Component({
  selector: 'app-page-event-group',
  templateUrl: './page-event-group.component.html',
  styleUrls: ['./page-event-group.component.scss'],
  imports: [
    EventCurrentMatchesComponent
  ],
  standalone: true
})
export class PageEventGroupComponent implements OnInit {
  event?: EventModel;

  constructor(
    private eventService: EventService
  ) {

  }

  ngOnInit() {
    this.fetchEvent();
  }

  fetchEvent() {
    this.eventService.getActiveEvent().subscribe({
      next: event => {
        this.event = event;
      }
    })
  }

}
