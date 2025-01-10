import { AfterViewInit, Component, input, Signal, signal } from '@angular/core';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-gallery-item',
  imports: [AudioPlayerComponent],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent implements AfterViewInit{
  
  randomString = this.generateRandomString(50);
  id = signal<string>(this.randomString);
  
  constructor(){
  }

  ngAfterViewInit(): void {
      
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      randomString += characters[randomIndex];
    }
  
    return randomString;
  }
  
  // Generate a random string of 50 characters
  

}
