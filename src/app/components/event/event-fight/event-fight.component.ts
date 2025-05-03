import {Component, Input} from '@angular/core';
import {EventFight, EventFightState} from "../../../core/models/event/event-fight.model";

@Component({
  selector: 'app-event-fight',
  imports: [],
  templateUrl: './event-fight.component.html',
  styleUrl: './event-fight.component.scss',
  standalone: true
})
export class EventFightComponent {
  @Input() fight!: EventFight

  playerJoin() {
    console.log(`event:${this.fight.serverName}`);
  }

  protected readonly EventFightState = EventFightState;
}
