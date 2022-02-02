import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.router.navigate(["cliente/lista"])
  }

  handleSubmit() {
    this.router.navigate(["cliente/lista"])
  }

}
