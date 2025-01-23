import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { IGif } from 'src/types';

@Component({
  selector: 'gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
  constructor(private http: HttpClient, private titleService: Title) {}

  showPopup: boolean = false;
  activeGif: IGif | null = null;
  gifs: IGif[] = [];

  UNSPLASH_ACCESS_KEY = 'PHM3TzGVzI-tBANFVrkZVRemozQzECEuVIVDE2CM8WQ'; // Replace with your Unsplash API key
  SEARCH_QUERY = 'dogs'; // Set to desired search term
  API_URL = `https://api.unsplash.com/search/photos?query=${this.SEARCH_QUERY}&per_page=10&client_id=${this.UNSPLASH_ACCESS_KEY}`;

  ngOnInit() {
    this.titleService.setTitle('GIFs - Giphy Lib');
    this.fetchGifs();
  }

  fetchGifs() {
    this.http.get<any>(this.API_URL).subscribe((response) => {
      this.gifs = response.results.map((img: any) => ({
        id: img.id,
        title: img.alt_description || 'GIF',
        height: img.height,
        width: img.width,
        image: img.urls.regular,
      }));
    });
  }

  onGifClick(clickedGif: IGif) {
    this.activeGif = clickedGif;
    this.showPopup = true;
  }

  onGifClose() {
    this.activeGif = null;
    this.showPopup = false;
  }
}
