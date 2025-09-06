import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {EventMatch} from "../../models/event/event-match.model";
import {environment} from "../../../../environments/environment";
import {EventFightState} from "../../models/event/event-fight.model";

@Injectable({
  providedIn: 'root'
})
export class EventMatchService extends BaseService {
  private API_URL: string = environment.api_urls.event_service + "match/";

  constructor(
    private apiService: ApiService
  ) {
    super("EventMatchService")
  }

  getMatchesByEvent(eventId: number): Observable<EventMatch[]> {
    return this.apiService.get(this.API_URL, `event/${eventId}/display`);
  }

  getCurrentMatchesByEvent(eventId: number): Observable<EventMatch[]> {
    const states = [EventFightState.STARTING, EventFightState.PREPARING, EventFightState.RUNNING]
    return this.apiService.get(this.API_URL, `event/${eventId}/state/${states.join(',')}/display`);
  }
}
