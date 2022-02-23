import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListaCategoriaComponent } from './pages/categoria/lista-categoria/lista-categoria.component';
import { CadastroCategoriaComponent } from './pages/categoria/cadastro-categoria/cadastro-categoria.component';
import { EntradaProdutoComponent } from './pages/produto/entrada-produto/entrada-produto.component';
import { ListaFuncionarioComponent } from './pages/funcionario/lista-funcionario/lista-funcionario.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarFornecedorComponent } from './pages/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './pages/fornecedor/listar-fornecedor/listar-fornecedor.component';
import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import {MatIconModule} from "@angular/material/icon";
import { ListaComponent } from './components/lista/lista.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CadastroProdutoComponent } from './pages/produto/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './pages/produto/lista-produto/lista-produto.component';
import { BaixaEstoqueComponent } from './pages/baixa-estoque/baixa-estoque.component';
import { ContainerPagesComponent } from './components/container-pages/container-pages.component';
import { VendaComponent } from './pages/venda/venda.component';
import {httpInterceptorProviders} from "./shared/interceptors/httpInterceptorProvider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CadastroMarcaComponent} from "./pages/marca/cadastro-marca/cadastro-marca.component";
import {ListaMarcaComponent} from "./pages/marca/lista-marca/lista-marca.component";
import { NgxMaskModule, IConfig } from 'ngx-mask'
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {decimalNumberFormatPipe} from "./util/decimalNumberFormatPipe";

registerLocaleData(ptBr);

// @ts-ignore
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaCategoriaComponent,
    CadastroCategoriaComponent,
    EntradaProdutoComponent,
    ListaFuncionarioComponent,
    CadastrarFuncionarioComponent,
    CadastrarFornecedorComponent,
    ListarFornecedorComponent,
    ListarClienteComponent,
    CadastrarClienteComponent,
    ListaComponent,
    CadastroComponent,
    NavbarComponent,
    SidenavComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    BaixaEstoqueComponent,
    ContainerPagesComponent,
    VendaComponent,
    CadastroMarcaComponent,
    ListaMarcaComponent,
    decimalNumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    httpInterceptorProviders
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
