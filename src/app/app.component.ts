import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms-manga';
  sidebarActive = false;
  leftMenu = [
    {name: 'Authors', routerLink: 'authors'},
    {name: 'Comics', routerLink: 'comics'},
    {name: 'Categories', routerLink: 'categories'},
    {name: 'Chaps', routerLink: 'chaps'},
    {name: 'Sources', routerLink: 'sources'}
  ];

  constructor(
  ) {

  }

  ngOnInit() {
  }

  toggleClass() {
    this.sidebarActive = !this.sidebarActive;
  }
}
