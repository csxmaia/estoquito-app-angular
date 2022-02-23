import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Categoria from "../../../models/Categoria";
import {CategoriaService} from "../../../services/categoria.service";
import {Location} from "@angular/common";
import Marca from "../../../models/Marca";

const CATEGORIA_DEFAULT_VALUES: Marca = {
  id: undefined,
  nome: '',
  descricao: ''
}

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria: Categoria = Object.assign({}, CATEGORIA_DEFAULT_VALUES);

  constructor(
    private router: Router,
    private location: Location,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.location.back();
  }

  handleSubmit(goBack: boolean = false) {
    this.categoriaService.save(this.categoria).subscribe({
      complete: () => {
        if(goBack) {
          this.router.navigate(['categoria/lista'])
        } else {
          this.categoria = Object.assign({}, CATEGORIA_DEFAULT_VALUES);
        }
      }
    })
  }
}
