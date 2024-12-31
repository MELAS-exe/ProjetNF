import { Component, signal } from '@angular/core';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-gallery-item',
  imports: [AudioPlayerComponent],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent {
  galId = signal<string>("gal-1");
}
