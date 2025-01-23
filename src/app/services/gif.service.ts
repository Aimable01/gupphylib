import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = environment.UNSPLASH_ACCESS_KEY;
  private unsplashUrl = 'https://api.unsplash.com/search/photos';

  private topics: string[] = [
    'nature',
    'animals',
    'architecture',
    'food',
    'travel',
    'art',
    'sports',
    'fashion',
    'movies',
    'photography',
    'literature',
    'health',
    'fitness',
    'finance',
    'gaming',
    'cars',
    'motorcycles',
    'humor',
    'memes',
    'pets',
    'adventure',
    'mystery',
    'comics',
    'anime',
    'DIY',
    'crafts',
    'gardening',
  ];

  constructor(private http: HttpClient) {}

  // Get a random topic from the list
  private getRandomTopic(): string {
    const randomIndex = Math.floor(Math.random() * this.topics.length);
    return this.topics[randomIndex];
  }

  getTrendingGifs(): Observable<any> {
    const topic = this.getRandomTopic(); // Fetch a random topic
    return this.http.get(
      `${this.unsplashUrl}?query=${topic}&client_id=${this.apiKey}`
    );
  }

  getRandomGifs(): Observable<any> {
    const topic = this.getRandomTopic(); // Fetch a random topic
    return this.http.get(
      `${this.unsplashUrl}?query=${topic}&client_id=${this.apiKey}`
    );
  }

  searchGifs(query: string): Observable<any> {
    return this.http.get(
      `${this.unsplashUrl}?query=${query}&client_id=${this.apiKey}`
    );
  }
}
