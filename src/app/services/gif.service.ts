import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = 'PHM3TzGVzI-tBANFVrkZVRemozQzECEuVIVDE2CM8WQ';
  private unsplashUrl = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) {}

  getTrendingGifs(): Observable<any> {
    return this.http.get(
      `${this.unsplashUrl}?query=trending&client_id=${this.apiKey}`
    );
  }

  getRandomGifs(): Observable<any> {
    return this.http.get(
      `${this.unsplashUrl}?query=random&client_id=${this.apiKey}`
    );
  }
}
