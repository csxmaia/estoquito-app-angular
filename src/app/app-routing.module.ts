import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {CadastroCategoriaComponent} from "./pages/categoria/cadastro-categoria/cadastro-categoria.component";
import {ListaCategoriaComponent} from "./pages/categoria/lista-categoria/lista-categoria.component";
import {ListarClienteComponent} from "./pages/cliente/listar-cliente/listar-cliente.component";
import {CadastrarClienteComponent} from "./pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import {CadastrarFornecedorComponent} from "./pages/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component";
import {ListarFornecedorComponent} from "./pages/fornecedor/listar-fornecedor/listar-fornecedor.component";
import {CadastrarFuncionarioComponent} from "./pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import {ListaFuncionarioComponent} from "./pages/funcionario/lista-funcionario/lista-funcionario.component";
import {CadastroProdutoComponent} from "./pages/produto/cadastro-produto/cadastro-produto.component";
import {ListaProdutoComponent} from "./pages/produto/lista-produto/lista-produto.component";
import {BaixaEstoqueComponent} from "./pages/baixa-estoque/baixa-estoque.component";
import {VendaComponent} from "./pages/venda/venda.component";
import {EntradaProdutoComponent} from "./pages/produto/entrada-produto/entrada-produto.component";
import {ListaMarcaComponent} from "./pages/marca/lista-marca/lista-marca.component";
import {CadastroMarcaComponent} from "./pages/marca/cadastro-marca/cadastro-marca.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'categoria/cadastrar', component: CadastroCategoriaComponent },
  // { path: 'categoria/editar/:id', component: CadastroCategoriaComponent },
  { path: 'categoria/lista', component: ListaCategoriaComponent },
  { path: 'marca/cadastrar', component: CadastroMarcaComponent },
  // { path: 'marca/editar/:id', component: CadastroMarcaComponent },
  { path: 'marca/lista', component: ListaMarcaComponent },
  { path: 'produto/cadastrar', component: CadastroProdutoComponent },
  { path: 'produto/editar/:id', component: CadastroProdutoComponent },
  { path: 'produto/lista', component: ListaProdutoComponent },

  { path: 'produto/entrada', component: EntradaProdutoComponent },
  { path: 'fornecedor/cadastrar', component: CadastrarFornecedorComponent },
  { path: 'fornecedor/lista', component: ListarFornecedorComponent },
  { path: 'funcionario/cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'funcionario/lista', component: ListaFuncionarioComponent },
  { path: 'baixa-estoque', component: BaixaEstoqueComponent },
  { path: 'venda', component: VendaComponent },


  { path: 'cliente/cadastrar', component: CadastrarClienteComponent },
  { path: 'cliente/lista', component: ListarClienteComponent },

  // { path: 'home', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
