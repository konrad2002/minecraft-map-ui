import { Routes } from '@angular/router';
import {PageEventGroupComponent} from "./pages/page-event-group/page-event-group.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'event/group',
    pathMatch: 'full',
    component: PageEventGroupComponent,
    data: {title: 'MyPlayPlanet Dashboard'}
  },
]
