import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Produto from "../../../models/Produto";
import {MarcaService} from "../../../services/marca.service";
import ApiResponse from "../../../models/interfaces/api/ApiResponse";
import Marca from "../../../models/Marca";
import Categoria from "../../../models/Categoria";
import {CategoriaService} from "../../../services/categoria.service";
import {Location} from "@angular/common";
import {ProdutoService} from "../../../services/produto.service";
import {numberFormat, removeNumberFormat} from "../../../util/numberFormat";
import {ProdutoApiService} from "../../../services/produtoApi.service";

const PRODUTO_DEFAULT_VALUES: Produto = {
  id: undefined,
  ean: '',
  nome: '',
  quantidadeEstoque: '',
  quantidadeMinima: '',
  tipoEmbalagem: 'UNIDADE',
  valorVenda: '',
  descricao: '',
  marca: {
    id: undefined,
    nome: '',
    descricao: ''
  },
  categoria: {
    id: undefined,
    nome: '',
    descricao: ''
  }
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  isEdit: boolean = false;
  compareFn = this._compareFn.bind(this);
  PRODUTO_DEFAULT_VALUES_PUBLIC = PRODUTO_DEFAULT_VALUES

  @ViewChild('ean', {static: false}) inputEan: ElementRef | undefined;

  produto: Produto = Object.assign({}, PRODUTO_DEFAULT_VALUES);

  marcaList: Marca[] = [];
  categoriaList: Categoria[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private produtoApiService: ProdutoApiService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.isEdit = true
    if(this.isEdit && id) {
      this.produtoService.getById(id).subscribe({
        next: (response: ApiResponse) => {
          console.log(response.data)
          let produtoToFront: Produto = Object.assign({}, response.data);
          console.log(produtoToFront)
          produtoToFront.quantidadeEstoque = numberFormat(produtoToFront.quantidadeEstoque!, 3)
          produtoToFront.quantidadeMinima = numberFormat(produtoToFront.quantidadeMinima!,3 )
          produtoToFront.valorVenda = numberFormat(produtoToFront.valorVenda!, 2)
          this.produto = produtoToFront;
        }
      })
    } else {

    }
    this.marcaService.getAll().subscribe({
      next: (response: ApiResponse) => this.marcaList = response.data
    })
    this.categoriaService.getAll().subscribe({
      next: (response: ApiResponse) => this.categoriaList = response.data
    })
  }

  handleCancel() {
    this.location.back();
  }

  handleSubmit(goBack: boolean = false) {
    //verify fields

    //manipulate data to backend
    let produtoToBack = Object.assign({}, this.produto);
    produtoToBack.quantidadeEstoque = removeNumberFormat(produtoToBack.quantidadeEstoque!)
    produtoToBack.quantidadeMinima = removeNumberFormat(produtoToBack.quantidadeMinima!)
    produtoToBack.valorVenda = removeNumberFormat(produtoToBack.valorVenda!)

    //send to backend
    this.produtoService.save(produtoToBack).subscribe({
      complete: () => {
        if(goBack) {
          this.router.navigate(["produto/lista"])
        } else {
          this.produto = Object.assign({}, PRODUTO_DEFAULT_VALUES);
          this.inputEan?.nativeElement.focus();
        }
      }
    })
  }

  handleEnterOnEan() {
    this.produtoApiService.getByEan(this.produto.ean!).subscribe({
      next: response => {
        console.log(response)
      }
    })
  }

  _compareFn(a: any, b: any) {
    if(a !== undefined && b !== undefined) {
      return a.id === b.id;
    }
    return false;
  }

}
