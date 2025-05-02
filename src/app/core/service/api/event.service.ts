import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {EventModel} from "../../models/event/event.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {
  private API_URL: string = environment.api_urls.event_service;


  constructor(
    private apiService: ApiService

  ) {
    super("EventService");
  }

  getActiveEvent(): Observable<EventModel> {
    return this.apiService.get(this.API_URL, "active/display");
  }

  getEvents(): Observable<EventModel[]> {
    return this.apiService.get(this.API_URL, "all/display");
  }

  getEventByShortName(shortName: string): Observable<EventModel> {
    return this.apiService.get(this.API_URL, "shortname/" + shortName + "/display");
  }
}
