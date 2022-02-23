import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import Categoria from "../models/Categoria";


@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private path = "/v1/categoria";

  constructor(private http: HttpClient) {}

  save(categoria: Categoria): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/save`, categoria);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.api}${this.path}`);
  }
}
