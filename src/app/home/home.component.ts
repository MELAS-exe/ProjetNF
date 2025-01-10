import { Component } from '@angular/core';
import { HomeGalleryTileComponent } from '../components/home-gallery-tile/home-gallery-tile.component';

@Component({
  selector: 'app-home',
  imports: [HomeGalleryTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
