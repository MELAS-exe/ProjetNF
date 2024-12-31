import { Component } from '@angular/core';
import { AudioPlayerComponent } from "../components/audio-player/audio-player.component";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-nettoyer',
  imports: [AudioPlayerComponent],
  providers: [MessageService],
  templateUrl: './nettoyer.component.html',
  styleUrl: './nettoyer.component.scss'
})
export class NettoyerComponent {

}
