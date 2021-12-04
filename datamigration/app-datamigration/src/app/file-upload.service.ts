import { Injectable } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Uploadresult } from './uploadresult';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor(private http: HttpClient) { 
    
  }

  postFile(fileToUpload: File): Observable<Uploadresult> {
    let headers = new HttpHeaders({
      'auth_code': localStorage.getItem("sfAuthCode") });
    const endpoint = 'http://localhost:8000/files';
    const formData: FormData = new FormData();
    //formData.append('sfAuthCode', localStorage.getItem("sfAuthCode"));
    formData.append('file', fileToUpload);
    return this.http
      .post<Uploadresult>(endpoint, formData, { headers: headers});
  }
}
