import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import Usuario from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = "/v1/auth";
  private token_name = "ESTQ_Token";

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/login`, usuario);
  }

  setToken(jwtToken: string) {
    localStorage.setItem(this.token_name, jwtToken);
  }

  getToken() {
    return localStorage.getItem(this.token_name);
  }

  logout() {
    localStorage.removeItem(this.token_name);
    window.location.href = "/login";
  }
}
