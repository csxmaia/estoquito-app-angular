import { Component, OnInit } from '@angular/core';
import User from "../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}