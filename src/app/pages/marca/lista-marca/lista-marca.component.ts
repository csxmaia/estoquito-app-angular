import {Component, OnInit} from '@angular/core';
import ApiResponse from "../../../models/interfaces/api/ApiResponse";
import {MarcaService} from "../../../services/marca.service";
import Marca from "../../../models/Marca";

@Component({
  selector: 'app-lista-marca',
  templateUrl: './lista-marca.component.html',
  styleUrls: ['./lista-marca.component.scss']
})
export class ListaMarcaComponent implements OnInit {

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.marcaService.getAll().subscribe({
      next: (response: ApiResponse) => {
        this.marcas = response.data;
      }
    })
  }

}
