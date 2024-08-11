import { inject, Injectable, Injector } from "@angular/core";
import {
HttpEvent,
HttpRequest,
HttpHandlerFn
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

export function HeaderInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const _authService = inject(AuthService);

  if (req.headers.has('Authorization')) {
    return next(req);
  }

  const authHeader = _authService.getToken();

  if (_authService.isLoggedIn()) {
    const dupReq = req.clone({
      headers: req.headers
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', `Bearer ${authHeader}`)
    });
    return next(dupReq);
  } else {
    const dupReq = req.clone({
      headers: req.headers
        .set('Content-Type', 'multipart/form-data; boundary=ExampleBoundaryString')
    });
    return next(dupReq);
  }
}
