import { Component, Input } from '@angular/core';
import { IGif } from 'src/types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() onGifClick: any;
  @Input() gif: IGif | undefined;
  
}
