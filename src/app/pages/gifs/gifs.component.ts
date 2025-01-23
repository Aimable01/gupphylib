import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';
import { IGif } from 'src/types'; // Ensure this interface is defined

@Component({
  selector: 'gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
  gifs: IGif[] = [];
  activeGif: IGif | null = null; // Add this property
  showPopup: boolean = false; // Add this property

  constructor(private gifService: GifService) {}

  ngOnInit() {
    // Load based on current route
    const currentPath = window.location.pathname;
    if (currentPath === '/trending') {
      this.fetchTrendingGifs();
    } else if (currentPath === '/random') {
      this.fetchRandomGifs();
    } else {
      this.fetchRandomGifs(); // Default for home
    }
  }

  fetchTrendingGifs() {
    this.gifService.getTrendingGifs().subscribe((response) => {
      this.gifs = response.results.map((img: any) => ({
        id: img.id, // Add an ID for uniqueness
        title: img.alt_description || 'Untitled',
        width: img.width,
        height: img.height,
        image: img.urls.small,
      }));
    });
  }

  fetchRandomGifs() {
    this.gifService.getRandomGifs().subscribe((response) => {
      this.gifs = response.results.map((img: any) => ({
        id: img.id, // Add an ID for uniqueness
        title: img.alt_description || 'Untitled',
        width: img.width,
        height: img.height,
        image: img.urls.small,
      }));
    });
  }

  // Add this method to handle GIF clicks
  onGifClick(clickedGif: IGif) {
    this.activeGif = clickedGif;
    this.showPopup = true;
  }

  // Add this method to close the popup
  onGifClose() {
    this.activeGif = null;
    this.showPopup = false;
  }
}
