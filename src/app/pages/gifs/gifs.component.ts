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
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.gifService.getTrendingGifs().subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  fetchRandomGifs() {
    this.isLoading = true;
    this.gifService.getRandomGifs().subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  fetchSearchGifs(query: string) {
    this.isLoading = true;
    this.gifService.searchGifs(query).subscribe(
      (response) => {
        this.gifs = response.results.map((img: any) => ({
          id: img.id,
          title: img.alt_description || 'Untitled',
          width: img.width,
          height: img.height,
          image: img.urls.small,
        }));
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
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
