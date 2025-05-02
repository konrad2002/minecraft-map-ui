import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import {routes} from "./app.routes";
import {provideAnimations} from "@angular/platform-browser/animations";
import {apiKeyInterceptor} from "./core/interceptor/api-key.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([apiKeyInterceptor])),
    provideAnimations()
  ],
};
