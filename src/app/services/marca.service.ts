import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import Marca from "../models/Marca";


@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  private path = "/v1/marca";

  constructor(private http: HttpClient) {}

  save(marca: Marca): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/save`, marca);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.api}${this.path}`);
  }
}
