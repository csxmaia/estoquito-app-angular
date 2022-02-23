import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import Produto from "../models/Produto";


@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private path = "/v1/produto";

  constructor(private http: HttpClient) {}

  save(produto: Produto): Observable<any> {
    return this.http.post(`${environment.api}${this.path}/save`, produto);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.api}${this.path}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${environment.api}${this.path}/${id}`);
  }
}
