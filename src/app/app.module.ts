import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListaMaterialComponent } from './material/lista-material/lista-material.component';
import { CadastroMaterialComponent } from './material/cadastro-material/cadastro-material.component';
import { ListaVendaComponent } from './venda/lista-venda/lista-venda.component';
import { CadastroVendaComponent } from './venda/cadastro-venda/cadastro-venda.component';
import { ListaCategoriaComponent } from './caracteristica/lista-categoria/lista-categoria.component';
import { CadastroCategoriaComponent } from './caracteristica/cadastro-categoria/cadastro-categoria.component';
import { EntradaProdutoComponent } from './produto/entrada-produto/entrada-produto.component';
import { ListaFuncionarioComponent } from './funcionario/lista-funcionario/lista-funcionario.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarFornecedorComponent } from './fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './fornecedor/listar-fornecedor/listar-fornecedor.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import {MatIconModule} from "@angular/material/icon";
import { ListaComponent } from './components/lista/lista.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaMaterialComponent,
    CadastroMaterialComponent,
    ListaVendaComponent,
    CadastroVendaComponent,
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
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
