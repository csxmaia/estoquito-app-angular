import { Component, OnInit } from '@angular/core';
import Categoria from "../../../models/Categoria";
import {CategoriaService} from "../../../services/categoria.service";
import ApiResponse from "../../../models/interfaces/api/ApiResponse";

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe({
      next: (response: ApiResponse) => {
        this.categorias = response.data;
      }
    })
  }

}
