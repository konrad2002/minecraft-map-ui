import {Component, Input, OnInit} from '@angular/core';
import {EventMatchComponent} from "../event-match/event-match.component";
import {EventModel} from "../../../core/models/event/event.model";
import {EventMatch} from "../../../core/models/event/event-match.model";
import {EventMatchService} from "../../../core/service/api/event-match.service";

@Component({
  selector: 'app-event-current-matches',
  imports: [
    EventMatchComponent
  ],
  templateUrl: './event-current-matches.component.html',
  styleUrl: './event-current-matches.component.scss'
})
export class EventCurrentMatchesComponent implements OnInit {
  @Input() event!: EventModel;
  matches: EventMatch[] = [];

  constructor(
    private eventMatchService: EventMatchService
  ) {}

  ngOnInit() {
    this.fetchMatches();
  }

  fetchMatches() {
    this.eventMatchService.getCurrentMatchesByEvent(this.event.id).subscribe({
      next: matches => {
        this.matches = matches;
      }
    })
  }
}
