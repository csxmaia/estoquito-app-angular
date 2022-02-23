import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {MarcaService} from "../../../services/marca.service";
import Marca from "../../../models/Marca";

const MARCA_DEFAULT_VALUES: Marca = {
  id: undefined,
  nome: '',
  descricao: ''
}

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.scss']
})
export class CadastroMarcaComponent implements OnInit {

  marca: Marca = Object.assign({}, MARCA_DEFAULT_VALUES);

  constructor(
    private router: Router,
    private marcaService: MarcaService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.location.back();
  }

  handleSubmit(goBack: boolean = false) {
    this.marcaService.save(this.marca).subscribe({
      complete: () => {
        if(goBack) {
          this.router.navigate(['marca/lista'])
        } else {
          this.marca = Object.assign({}, MARCA_DEFAULT_VALUES);
        }
      }
    })
  }
}
