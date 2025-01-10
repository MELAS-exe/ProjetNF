import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PostAudioService } from '../../services/post-audio.service';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
  imports: [MatIconModule, CommonModule],

})
export class DragDropComponent {
  audioName = signal('');
  fileSize = signal(0);
  uploadProgress = signal(0);
  audioPreview = signal('');
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;

  constructor(private snackBar: MatSnackBar, private postAudioService: PostAudioService) {}

  // Handler for file input change
  onFileChange(event: any): void {
    const file = event.target.files[0] as File | null;
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file upload
  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('audio/')) {
      this.selectedFile = file;
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB
        
      const reader = new FileReader();
      reader.onload = (e) => {
        this.audioPreview.set(e.target?.result as string); // Set audio preview URL
      };
      reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
      this.audioName.set(file.name); // Set audio name
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
      this.snackBar.open('Seuls les fichiers audios sont autorisés!', 'fermer', {
        duration: 3000,
        panelClass: 'error',
      });
    }
  }

  postFile(): void{
    if(this.selectedFile) {
      this.postAudioService.uploadAudio(this.selectedFile, 'echo').subscribe(
        (response) => {
          console.log("File uploaded succesfully:", response);
        },
        (error) => {
          console.error("Error uploading File", error);
        }
      );
    } else {
      console.error("No file selected");
    }
  }

  // Method to remove the uploaded audio
  removeaudio(): void {
    this.selectedFile = null;
    this.audioName.set('');
    this.fileSize.set(0);
    this.audioPreview.set('');
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }
}