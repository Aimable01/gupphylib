import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { IGif } from 'src/types';

@Component({
  selector: 'gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent {
  constructor(private titleService: Title) { }
  showPopup: boolean = true;
  activeGif: IGif | null = null;
  gifs: IGif[] = [
    {
      id: '3o7aD2X9Y5KQXpFYpy',
      title: "GIF 1",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: '3o7aD2X9Y5Kgdgdfwey',
      title: "GIF 2",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: '3ohgD2X9Y5KQXpFYpy',
      title: "GIF 2",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: '3o7aD2X9Y5fwXpFYpy',
      title: "GIF 3",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: '3o7aD2X9qwKQXpFYpy',
      title: "GIF 1",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: '3o7aD2X9Y5KoifFYpy',
      title: "GIF 4",
      height: 800,
      width: 900,
      image: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
  ]
  ngOnInit() {
    this.titleService.setTitle('GIFs - Giphy Lib');
  }

  onGifClick(clickedGif: IGif) {
    console.log('GIF clicked!');
    this.activeGif = clickedGif;
    console.log(this.activeGif);
    console.log(this.showPopup)
    this.showPopup = true
    console.log(this.showPopup)
  }
  showShit(){
    return this.showPopup
  }
  onGifClose() {
    this.activeGif = null;
    this.showPopup = false
  }
}
