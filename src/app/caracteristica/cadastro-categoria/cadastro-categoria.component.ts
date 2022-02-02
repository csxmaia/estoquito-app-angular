import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-caracteristica',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.router.navigate(["categoria/lista"])
  }

  handleSubmit() {
    this.router.navigate(["categoria/lista"])
  }
}
