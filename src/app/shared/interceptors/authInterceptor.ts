import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;

    const jwtToken = this.authService.getToken();
    if (jwtToken) {
      newReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
    }

    return next.handle(newReq)
  }


}

// const header = {};
// header['Authorization'] = jwtToken;
// const variablesHeaders = ['Content-Type', 'Accept'];
// for (let i = 0; i < variablesHeaders.length; i++) {
//   const value = req.headers.get(variablesHeaders[i]);
//   if (value) {
//     header[variablesHeaders[i]] = value;
//   }
