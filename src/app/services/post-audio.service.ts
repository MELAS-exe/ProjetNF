import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAudioService {
  url = "http://127.0.0.1:8000/api/upload_audio/";

  constructor(private http: HttpClient) {}
    uploadAudio(file: File, choice: string): Observable<any> {
      const formData = new FormData();
      formData.append('audio', file);
      formData.append('choice', choice);
      const headers = new HttpHeaders();
      return this.http.post(this.url, formData, {headers});
    } 

    getProcessedAudio(filename: string){
      
    }
}
