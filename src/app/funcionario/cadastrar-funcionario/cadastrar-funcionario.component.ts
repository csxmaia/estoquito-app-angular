import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.scss']
})
export class CadastrarFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.router.navigate(["funcionario/lista"])
  }

  handleSubmit() {
    this.router.navigate(["funcionario/lista"])
  }

}
