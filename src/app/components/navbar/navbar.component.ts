import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() navbarLinks: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'Random', path: '/random' },
  ];

  @Output() searchQuery = new EventEmitter<string>(); // Emit search query

  isMenuOpen = false;
  searchText: string = ''; // Store search input

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // Handle search
  onSearch() {
    if (this.searchText.trim()) {
      this.searchQuery.emit(this.searchText.trim()); // Emit the search query
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchText.trim() },
      }); // Navigate to the search route
      this.searchText = ''; // Clear the search input
      this.closeMenu(); // Close the mobile menu
    }
  }
}
