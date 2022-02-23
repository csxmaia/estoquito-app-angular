import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.scss']
})
export class CadastrarFornecedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.router.navigate(["fornecedor/lista"])
  }

  handleSubmit() {
    this.router.navigate(["fornecedor/lista"])
  }

}
