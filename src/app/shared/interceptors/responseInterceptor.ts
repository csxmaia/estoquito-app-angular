import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
// import snackBarConfig from "../../../util/snackBarConfig";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar){ }

  snackBarOpen(message: string, status: string) {
    this._snackBar.open(message, "✖️");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          if(response.body && response.body.success && response.body.message) {
            this.snackBarOpen(response.body.message, "mat-success");
          }
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          try {
            if(err.error.message && err.error.success !== undefined) {
              this.snackBarOpen(err.error.message, "mat-error");
            } else {
              this.snackBarOpen("Erro não identificado", "mat-error");
            }
          } catch(e) {
            this.snackBarOpen("Erro inesperado", "mat-error")
          }
        }
        return throwError(err);
      }));
  }
}
