import { Component } from '@angular/core';
import { AudioPlayerComponent } from "../components/audio-player/audio-player.component";
import { MessageService } from 'primeng/api';
import { DragDropComponent } from "../components/drag-drop/drag-drop.component";
@Component({
  selector: 'app-nettoyer',
  imports: [AudioPlayerComponent, DragDropComponent],
  providers: [MessageService],
  templateUrl: './nettoyer.component.html',
  styleUrl: './nettoyer.component.scss'
})
export class NettoyerComponent {

}
