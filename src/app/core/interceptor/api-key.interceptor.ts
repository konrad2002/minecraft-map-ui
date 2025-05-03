import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (request, next) => {
  if (request.url.includes("myplayplanet.services") || request.url.includes("localhost") || request.url.includes("api.myplayplanet.dev") || request.url.includes("api.myplayplanet.services")) {
    const modifiedReq = request.clone({
      headers: request.headers.set('apikey', 'mpp-map-ui'),
    });

    console.log("accessing " + request.url + " with token");

    return next(modifiedReq);
  }

  return next(request);
};
