import { Component } from '@angular/core';
import { GalleryItemComponent } from '../components/gallery-item/gallery-item.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-explorer',
  imports: [GalleryItemComponent, MatIconModule],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {

}
