import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {environment} from "../../../../environments/environment";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {EventFight, EventFightState} from "../../models/event/event-fight.model";

@Injectable({
  providedIn: 'root'
})
export class EventFightService extends BaseService {
  private API_URL: string = environment.api_urls.event_service + "fight/";

  constructor(
    private apiService: ApiService
  ) {
    super("EventFightService")
  }

  getCurrentFights(eventId: number): Observable<EventFight[]> {
    const states = [EventFightState.STARTING, EventFightState.PREPARING, EventFightState.RUNNING]
    return this.apiService.get(this.API_URL, `${eventId}/state/${states.join(',')}`);
  }
}
