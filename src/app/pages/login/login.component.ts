import { Component, OnInit } from '@angular/core';
import Usuario from "../../models/Usuario";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.usuario).subscribe(data => {
      // this.loading = false;
      let token = data.object.access_token;
      this.authService.setToken(token);
      this.router.navigate(['/home'])
    });
  }
}
