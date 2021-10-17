import { Injectable } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Uploadresult } from './uploadresult';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { 
    
  }

  postFile(fileToUpload: File): Observable<Uploadresult> {
    const endpoint = 'http://localhost:8000/files';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http
      .post<Uploadresult>(endpoint, formData);
  }
}
