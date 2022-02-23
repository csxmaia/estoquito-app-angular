import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import Produto from "../models/Produto";


@Injectable({
  providedIn: 'root'
})

export class ProdutoApiService {

  private url = "http://brasilapi.simplescontrole.com.br/mercadoria/consulta/";
  private urlXYZ = "https://api.produto.xyz/v1/gtin/"

  constructor(private http: HttpClient) {}

  getByEan(ean: string): Observable<any> {
    return this.http.get(
      `${this.url}`,
      {
        params: {
          'ean': ean,
          'access-token': 'o1_REEzllnn2BbYvf_hV-I5zUXvYG3Qg',
          '_format': 'json'
        }
      }
    );
  }

  getByEanXYZ(ean: string): Observable<any> {
    return this.http.get(`${this.urlXYZ}${ean}`);
  }
}
