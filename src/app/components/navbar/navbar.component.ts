import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() navbarLinks: {
    name: string,
    path: string
  }[] = [
    { name: 'Trending', path: '/trending' },
    { name: 'Categories', path: '/categories' },
    { name: 'Random', path: '/random' },
  ]
}
