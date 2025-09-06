import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventModel} from "../../../core/models/event/event.model";
import {EventFightService} from "../../../core/service/api/event-fight.service";
import {EventFight} from "../../../core/models/event/event-fight.model";
import {EventFightComponent} from "../event-fight/event-fight.component";
import {EventMatchService} from "../../../core/service/api/event-match.service";
import {EventMatch} from "../../../core/models/event/event-match.model";

@Component({
  selector: 'app-event-current-fights',
  standalone: true,
  imports: [CommonModule, EventFightComponent],
  templateUrl: './event-current-fights.component.html',
  styleUrls: ['./event-current-fights.component.scss']
})
export class EventCurrentFightsComponent implements OnInit {
  @Input() event!: EventModel;
  fights: EventFight[] = [];
  matches: EventMatch[] = [];

  constructor(
    private eventFightService: EventFightService,
    private eventMatchService: EventMatchService
  ) {}

  ngOnInit() {
    this.fetchFetch();
    this.fetchMatches();
  }

  fetchFetch() {
    this.eventFightService.getCurrentFights(this.event.id).subscribe({
      next: fights => {
        this.fights = fights;
      }
    })
  }
  fetchMatches() {
    this.eventMatchService.getCurrentMatchesByEvent(this.event.id).subscribe({
      next: matches => {
        this.matches = matches;
      }
    })
  }
}
