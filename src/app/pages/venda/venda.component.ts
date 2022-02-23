import { Component, OnInit } from '@angular/core';
import ProductInfoToAdd from "../../models/interfaces/venda/ProductInfoToAdd";

const PRODUCT_TO_ADD_DEFAULT_VALUES: ProductInfoToAdd = {
  codigo: '',
  descricao: '',
  quantidade: '',
  valor_unitario: undefined,
  valor_total: undefined
}

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  //productToAddInfos
  produto: ProductInfoToAdd = Object.assign({}, PRODUCT_TO_ADD_DEFAULT_VALUES)

  //listProduct where already added
  produtoList: Array<ProductInfoToAdd> = []

  constructor() { }

  ngOnInit(): void {
  }

  addProduto() {
    //check verify


    this.produtoList.push({...this.produto})
    //reset
    this.produto = Object.assign({}, PRODUCT_TO_ADD_DEFAULT_VALUES)
  }
}
