import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../../services/produto.service";
import ApiResponse from "../../../models/interfaces/api/ApiResponse";
import Produto from "../../../models/Produto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe({
      next: (response: ApiResponse) => this.produtos = response.data
    })
  }

  handleEdit(produto: Produto) {
    this.router.navigate(['/produto/editar', produto.id])
  }
}
