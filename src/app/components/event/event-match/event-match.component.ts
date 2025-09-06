import {Component, Input} from '@angular/core';
import {EventFight, EventFightState} from "../../../core/models/event/event-fight.model";
import {EventMatch} from "../../../core/models/event/event-match.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-event-match',
  imports: [
    DatePipe
  ],
  templateUrl: './event-match.component.html',
  styleUrl: './event-match.component.scss'
})
export class EventMatchComponent {
  @Input() match!: EventMatch

  playerJoin(fight: EventFight) {
    console.log(`event:${fight.serverName}`);
  }

  protected readonly EventFightState = EventFightState;
}
