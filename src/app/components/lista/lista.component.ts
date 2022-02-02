import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() title?: string = 'Listagem';
  @Input() titleAdd?: string = 'Cadastrar';
  @Input() addUrl?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleAdd() {
    this.router.navigate([this.addUrl]);
  }
}
