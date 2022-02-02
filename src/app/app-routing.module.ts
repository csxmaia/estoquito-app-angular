import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CadastroCategoriaComponent} from "./caracteristica/cadastro-categoria/cadastro-categoria.component";
import {ListaCategoriaComponent} from "./caracteristica/lista-categoria/lista-categoria.component";
import {ListarClienteComponent} from "./cliente/listar-cliente/listar-cliente.component";
import {CadastrarClienteComponent} from "./cliente/cadastrar-cliente/cadastrar-cliente.component";
import {CadastrarFornecedorComponent} from "./fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component";
import {ListarFornecedorComponent} from "./fornecedor/listar-fornecedor/listar-fornecedor.component";
import {CadastrarFuncionarioComponent} from "./funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import {ListaFuncionarioComponent} from "./funcionario/lista-funcionario/lista-funcionario.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'categoria/cadastrar', component: CadastroCategoriaComponent },
  { path: 'categoria/lista', component: ListaCategoriaComponent },
  { path: 'cliente/cadastrar', component: CadastrarClienteComponent },
  { path: 'cliente/lista', component: ListarClienteComponent },
  { path: 'fornecedor/cadastrar', component: CadastrarFornecedorComponent },
  { path: 'fornecedor/lista', component: ListarFornecedorComponent },
  { path: 'funcionario/cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'funcionario/lista', component: ListaFuncionarioComponent },
  // { path: 'home', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
