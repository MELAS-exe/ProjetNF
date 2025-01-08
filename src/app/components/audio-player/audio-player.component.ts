import { AfterViewInit, Component, ElementRef, input, OnDestroy, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-audio-player',
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('playButton', {static: true}) playButton!: ElementRef<HTMLImageElement>;
  id = input.required<string>();
  url = input.required<string>();  
  isPlaying = false;
  wave: any;
  
  ngAfterViewInit(): void {
    this.wave = WaveSurfer.create({
        container: '#' + this.id(),
        height: 30,
        waveColor: 'black',
        progressColor: 'rgb(170,103,40)',
        width: 210,
        url: this.url(),
    
                // Set a bar width
                barWidth: 3,
                // Optionally, specify the spacing between bars
                barGap: 3,
                // And the bar radius
                barRadius: 3,
      });
  } 

  playPause(): void{
    if(this.isPlaying){
      this.playButton.nativeElement.src = 'assets/Play.png';
      this.wave.pause();
    }else{
      this.playButton.nativeElement.src = 'assets/Pause.png';
      this.wave.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  ngOnDestroy() {
    this.wave.destroy();
  }

  constructor() {
    
  }
  
}
