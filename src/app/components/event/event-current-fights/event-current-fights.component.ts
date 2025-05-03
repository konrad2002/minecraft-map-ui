import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventModel} from "../../../core/models/event/event.model";
import {EventFightService} from "../../../core/service/api/event-fight.service";
import {EventFight} from "../../../core/models/event/event-fight.model";
import {EventFightComponent} from "../event-fight/event-fight.component";

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

  constructor(
    private eventFightService: EventFightService
  ) {}

  ngOnInit() {
    this.fetchFetch();
  }

  fetchFetch() {
    this.eventFightService.getCurrentFights(this.event.id).subscribe({
      next: fights => {
        this.fights = fights;
      }
    })
  }
}
