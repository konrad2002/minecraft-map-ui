import {Component, OnInit} from '@angular/core';
import {EventCurrentFightsComponent} from "../../components/event/event-current-fights/event-current-fights.component";
import {EventService} from "../../core/service/api/event.service";
import {EventModel} from "../../core/models/event/event.model";

@Component({
  selector: 'app-page-event-group',
  templateUrl: './page-event-group.component.html',
  styleUrls: ['./page-event-group.component.scss'],
  imports: [
    EventCurrentFightsComponent
  ],
  standalone: true
})
export class PageEventGroupComponent implements OnInit {
  event: EventModel = {} as EventModel;

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
