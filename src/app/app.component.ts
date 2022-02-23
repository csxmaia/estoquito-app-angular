import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title: string = 'estoquito-app';

  activeRoute: string = '';
  fullPageList: string[] = [
    '/login',
    '/venda'
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((url:any) => {
      if(url.url !== this.activeRoute && url.url !== undefined) {
        this.activeRoute = url.url
      }
    });
  }


}
