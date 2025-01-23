import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];
  activeGif: any = null;
  showPopup: boolean = false;
  isLoading: boolean = false; // Add this property

  constructor(private gifService: GifService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const query = params['q'];
      if (query) {
        this.fetchSearchGifs(query);
      } else {
        const currentPath = window.location.pathname;
        if (currentPath === '/trending') {
          this.fetchTrendingGifs();
        } else if (currentPath === '/random') {
          this.fetchRandomGifs();
        } else {
          this.fetchRandomGifs(); // Default for home
        }
      }
    });
  }

  fetchTrendingGifs() {
    this.isLoading = true; // Start loading
    this.gifService.getTrendingGifs().subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false; // Stop loading
      },
      (error) => {
        this.isLoading = false; // Stop loading on error
      }
    );
  }

  fetchRandomGifs() {
    this.isLoading = true; // Start loading
    this.gifService.getRandomGifs().subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false; // Stop loading
      },
      (error) => {
        this.isLoading = false; // Stop loading on error
      }
    );
  }

  fetchSearchGifs(query: string) {
    this.isLoading = true; // Start loading
    this.gifService.searchGifs(query).subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false; // Stop loading
      },
      (error) => {
        this.isLoading = false; // Stop loading on error
      }
    );
  }

  onGifClick(clickedGif: any) {
    this.activeGif = clickedGif;
    this.showPopup = true;
  }

  onGifClose() {
    this.activeGif = null;
    this.showPopup = false;
  }
}
